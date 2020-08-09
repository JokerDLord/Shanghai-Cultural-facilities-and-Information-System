var data_shown = 0;

function onLoad()
{
    $("input[type=radio]").on('click', function()
    {
        if(this.selected)
        {
            this.checked = false;
            this.selected = false;
        }
        else
        {
            this.selected = true;
        }
    });
    $("input[type=checkbox]").on('click', function()
    {
        if(this.selected)
        {
            this.checked = false;
            this.selected = false;
        }
        else
        {
            this.selected = true;
        }
    });

    // Initalize Vue
    var app = new Vue(
    {
        el: "#result",
        data: {}
    });
};


//分析按钮
function showAnalysisData()
{
    if(data_shown)
        return;
    $.ajax({ 
        method: "post",
        data: $("#select").serialize(), // 这个函数用于获取表单里的所有数据
        url: "analysis",
        success: function(rawData){
            // rawData 是flask 传回的一个JSON 具体请看views.py里的query函数
            var allData = JSON.parse(rawData);
            // console.log(allData);
            if (allData.success)
            {
                data_shown = 1; // 只能点一次按钮
                showResult(allData.piechart, allData.location, allData.wordcloud, allData.recommend, allData.transport);
            }
                
            else {
                window.alert(allData.error);
                return;
            }
        }
    })
}

// 综合所有画图函数
function showResult(piechart, location, wordcloud, recommend, transport)
{
    // box1的内容
    var box1_title = document.getElementById('result-box-1-title');
    box1_title.innerText = 'No.' + Math.floor(Math.random()*10000) +'用户的休闲出行攻略';
    // box1画图
    var box1_left = document.getElementById('result-box-1-left');
    var box1_right = document.getElementById('result-box-1-right');
    setTimeout(function(){
        drawPie(box1_left, piechart);
        drawCloud(box1_right, wordcloud);
        setTimeout(function(){document.querySelectorAll('canvas')[1].getContext('2d').globalAlpha = 0;}, 1000);
    }, 300);

    // 地点1名称
    var place1_name = document.getElementById('place1-name');  
    place1_name.innerText = recommend[0]['name'];
    // 地点1地址
    var place1_address = document.getElementById('place1-address');  
    place1_address.innerText = recommend[0]['address'];
    // 地点2名称
    var place2_name = document.getElementById('place2-name');  
    place2_name.innerText = recommend[1]['name'];
    // 地点2地址
    var place2_address = document.getElementById('place2-address');  
    place2_address.innerText = recommend[1]['address'];

    // 先画地图
    var map1 = drawMap('result-box-2-right', recommend[0]);
    var map2 = drawMap('result-box-3-left', recommend[1]);

    // 画导航栏
    var panel1 = document.createElement('div');
    panel1.id = 'panel1';
    var panel2 = document.createElement('div');
    panel2.id = 'panel2';
    
    // 添加输入框，用于输入地址
    AMap.plugin('AMap.Autocomplete', function(){
        // 实例化Autocomplete
        var autoOptions1 = {
          city: '上海市',
          input: "input1"
        };
        var autoOptions2 = {
          city: '上海市',
          input: "input2"
        };
        var autoComplete1 = new AMap.Autocomplete(autoOptions1);
        var autoComplete2 = new AMap.Autocomplete(autoOptions2);
        // 一旦选中了地点，就进行查询路径
        autoComplete1.on('select', function(result)
        {
            drawRoute(map1, recommend[0], panel1, transport, result.poi.name);
        });
        autoComplete2.on('select', function(result)
        {
            drawRoute(map2, recommend[1], panel2, transport, result.poi.name);
        })
    });

    document.getElementById('result-box-2-right').appendChild(panel1);
    document.getElementById('result-box-3-left').appendChild(panel2);

    // 天气预报
    weatherInfo(location);

    $('#result').show(200);
}

// 画饼图
function drawPie(chartDiv, piechart)
{
    // 处理ajax返回数据格式
    var data = [];
    for(var i=0; i<piechart[0].length; i++)
    {
        var value = Math.floor(piechart[1][i]*10000);
        // 过滤掉推荐指数太低的部分
        if(value<500)
        {
            piechart[0] = piechart[0].slice(0, i);
            break;
        }
        data[i] = {value: value, name: piechart[0][i]};
    }

    // 利用echarts生成饼图
    var pie = echarts.init(chartDiv, 'roma');
    var pie_options = {
    title: {
        text: '休闲出行场所推荐指数',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}：{c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 0,
        top: 20,
        data: piechart[0]
    },
    series: [
        {
            name: '推荐指数',
            type: 'pie',
            radius: '55%',
            center: ['60%', '55%'],
            avoidLabelOverlap: false,
            label: {
                position: 'outer',
                alignTo: 'labelline',
                formatter: '{b|{b}：}{c}  {per|{d}%}',
                backgroundColor: '#FFF',
                borderColor: '#FFF',
                borderWidth: 0,
                borderRadius: 5,
                padding: [4, 4],
                rich: {
                    b: {
                        fontSize: 16,
                        lineHeight: 20
                    },
                    per: {
                        color: '#FFF',
                        backgroundColor: '#B22222',
                        padding: [2, 2],
                        borderRadius: 2
                    }
                }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data: data
        }
    ]
};
    pie.setOption(pie_options);
}

// 画词云图
function drawCloud(chartDiv, wordcloud)
{
    var data = {
        value: wordcloud
    }
    var cloud = echarts.init(chartDiv);
    cloud.setOption({
          backgroundColor:'#FFF',
          tooltip: {
            show: false
          },
          series: [{
            type: 'wordCloud',
            gridSize: 10,
            sizeRange: [16, 60],
            rotationRange: [-90, 90],
            shape: 'ellipse',
            textStyle: {
              normal: {
                fontFamily: '微软雅黑',
                color: function() {
                  return 'rgb(' +
                      Math.round(Math.random() * 255) +
                      ', ' + Math.round(Math.random() * 255) +
                      ', ' + Math.round(Math.random() * 255) + ')'
                }
              }
            },
            data: data.value
          }]
    });
}

// Support format of strings (I myself found it very useful)
String.prototype.format = function() {
    var values = arguments;
    return this.replace(/\{(\d+)\}/g, function (match, index) {
        if (values.length > index) {
            return values[index];
        } else {
            return "";
        }
    });
};　

// 将存取款机等信息转换为符号
function change(con){
    if(con==0){return "×";}
    else if(con==-1){return "-";}
    else{return "√";}
}

function removeOne(content)
{
    // 将-1转换为横线
    if(content == "-1" || content == '') return " - ";
    else return content;
}

function addWindow(content)
{
    //获取每一项信息
    name = content["name"];
    lng = content["x"];
    lat = content["y"];
    adcode = content["adcode"];
    adname = content["adname"];
    address = content["address"];
    rank = removeOne(content["rank"]);
    price = removeOne(content["price"]);
    score1 = removeOne(content["score1"]);
    score2 = removeOne(content["score2"]);
    score3 = removeOne(content["score3"]);
    hallsnum = removeOne(content["halls"]);
    halltype = removeOne(content["hallType"]);
    seats = removeOne(content["seats"]);
    glasses = change(content["glasses"]);
    credit = change(content["credit"]);
    ticketMachine = change(content["ticketMachine"]);
    wifi = change(content["wifi"]);
    park = change(content["park"]);
    disable = change(content["disable"]);
    food = change(content["food"]);
    recreation = change(content["recreation"]);

    var sContent =
        "<div style='margin:0px;font-size:18px;font-weight:bold;color:#400000;padding:2px 0px;border-style:none;'>{0}</div>".format(name)+
        "<div style='margin-top:8px;margin-bottom:8px;font-size:13px;font-weight:normal;color:#400000;'>地址：{0}</div>".format(address)+
        "<div style='margin-bottom:8px;border-style:none none none solid;border-left:2px solid #B22222;font-size:14px;color:#400000;padding:5px;background-color:#FFF0F5;'>评级:{0}<br>视效:{1}\t|\t环境:{2}\t|\t服务:{3}</div>" .format(rank,score1,score2,score3)+
        "<div style='margin-bottom:8px;border-style:none none none solid;border-left:2px solid #B22222;font-size:14px;color:#400000;padding:5px;background-color:#FFF0F5;'>人均:{0}元<br>放映厅数量:{1}, 座位总数:{2}<br>放映厅类型:{3}</div>".format(price,hallsnum,seats,halltype)+
        "<div style='margin-bottom:8px;border-style:none none none solid;border-left:2px solid #B22222;font-size:14px;color:#400000;padding:5px;background-color:#FFF0F5;'>提供3D眼镜{0}\t可信用卡支付{1}\t自助售票机{2}<br>免费WIFI{3}\t提供停车场{4}\t残疾人士友好{5}<br>食品出售{6}\t娱乐设施{7}</div>".format(glasses,credit,ticketMachine,wifi,park,disable,food,recreation);
    return sContent;
}

// 基本地图加载
function drawMap(mapDiv, recommend)
{ 
    var map = new AMap.Map(mapDiv, {
        mapStyle: "amap://styles/fresh",
        resizeEnable: true,
        center: [recommend.x, recommend.y],//地图中心点
        zoom: 15 //地图显示的缩放级别
    });
    var icon = new AMap.Icon({
        size: new AMap.Size(36, 51),
        image: '/static/Markers/recommend-icon.png',
        imageSize: new AMap.Size(36, 51)
    })
    var marker = new AMap.Marker({
        icon: icon,
        position: [recommend.x, recommend.y],
        offset: new AMap.Pixel(-18, -51)
    });
    marker.setMap(map);
    // 添加信息窗口
    if(recommend.rank)
    {
        console.log(recommend);
        var point = marker.getPosition();
        var markerInfoWin = new AMap.InfoWindow({content: addWindow(recommend), offset:new AMap.Pixel(0,-30)}); // 创建信息窗口对象
        markerInfoWin.open(map, point); //开启信息窗口
    }

    return map;
}

// 路径规划
function drawRoute(map, recommend, panel, transport, input)
{
    // 先清空地图
    map.clearMap();
	var t;
	if (transport == 'driving') {
        // 开车
        t = new AMap.Driving({
        map: map,
        panel: panel,
        showTraffic: false
    	});
    }
    else if (transport == 'transfer') {
        // 公交
        t = new AMap.Transfer({
        map: map,
        panel: panel,
        showTraffic: false
    	});
    }
    else if (transport == 'riding') {
        // 骑行
        t = new AMap.Riding({
        map: map,
        panel: panel,
        showTraffic: false
    	});
    }
    else if (transport == 'walking') {
        // 步行
        t = new AMap.Walking({
        map: map,
        panel: panel,
        showTraffic: false
    	});
    }

    t.search([
        {keyword: input,city:'上海'},
        {keyword: recommend.name ,city:'上海'}
    ], function(status, result) {
        // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
        if (status === 'complete') {
        	console.log(result);
            if (result.routes && result.routes.length) {
                // 绘制第一条路线，也可以按需求绘制其它几条路线
                colorRoute(result.routes[0], map);
                console.log('绘制路线完成');
            }
            else if (result.plans && result.plans.length) {
                // 绘制第一条路线，也可以按需求绘制其它几条路线
                colorPlan(result.plans[0], map);
                console.log('绘制路线完成');
            }
        } else {
            console.log('获取驾车数据失败：' + result);
        }
    });
}

// 一类路径规划的上色
function colorRoute(route, map) {
    var path = parseRouteToPath(route);
    var startMarker = new AMap.Marker({
        position: path[0],
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/start.png',
        map: map
    });
    var endMarker = new AMap.Marker({
        position: path[path.length - 1],
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/end.png',
        map: map
    });
    var routeLine = new AMap.Polyline({
        path: path,
        zIndex: 999999,
        showDir: true,
        isOutline: true,
        outlineColor: '#FFEEEE',
        borderWeight: 2,
        strokeWeight: 8,
        strokeColor: '#B22222', // 红色
        lineJoin: 'round'
    });
    routeLine.setMap(map);
    // 调整视野达到最佳显示区域
    map.setFitView([ startMarker, endMarker, routeLine ]);
}
// 另一类路径规划的上色
function colorPlan(route, map) {
    var startMarker = new AMap.Marker({
        position: route.segments[0].transit.origin,
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/start.png',
        map: map
    });
    var endMarker = new AMap.Marker({
        position: route.segments[route.segments.length - 1].transit.destination,
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/end.png',
        map: map
    });
    var routeLines = [];
    for (var i = 0, l = route.segments.length; i < l; i++) {
        var segment = route.segments[i];
        var line = null;
        // 绘制步行路线
        if (segment.transit_mode === 'WALK') {
            line = new AMap.Polyline({
                path: segment.transit.path,
                isOutline: true,
                outlineColor: '#FFEEEE',
                showDir: true,
                zIndex: 999999,
                borderWeight: 2,
                strokeWeight: 8,
                strokeColor: '#B22222',
                lineJoin: 'round',
                strokeStyle: 'dashed'
            });
            line.setMap(map);
            routeLines.push(line);
        } else if (segment.transit_mode === 'SUBWAY' || segment.transit_mode === 'BUS') {
            line = new AMap.Polyline({
                path: segment.transit.path,
                isOutline: true,
                outlineColor: '#FFEEEE',
                borderWeight: 2,
                strokeWeight: 8,
                showDir: true,
                zIndex: 999999,
                strokeColor: '#B22222',
                lineJoin: 'round',
                strokeStyle: 'solid'
            });                
            line.setMap(map);
            routeLines.push(line);
        } else {
        	console.log("Fell!!!!")
            // 其它transit_mode的情况如RAILWAY、TAXI等，该示例中不做处理
        }
    }
    // 调整视野达到最佳显示区域
    map.setFitView([ startMarker, endMarker ].concat(routeLines));
}
// 路径点列表格式转换
function parseRouteToPath(route) {
    var path = [];
    if(route.rides)
    	route.steps = route.rides;
    for (var i = 0, l = route.steps.length; i < l; i++) {
        var step = route.steps[i];
        for (var j = 0, n = step.path.length; j < n; j++) {
          path.push(step.path[j]);
        }
    }
    return path;
}

//下载图片按钮
function downloadPic()
{
 
    createPic();
    //生成图片函数

}

function createPic()
{

}


function weatherInfo(location) //城市天气查询
{
    AMap.plugin('AMap.Weather', function() {
        var weather = new AMap.Weather();
        //查询天气预报
        weather.getForecast(location, function(err, data) {
            if (!err) {
                // 第一天
                var day1 = data.forecasts[0];
                var date1 = document.getElementById('date1');
                date1.innerText = day1.date + ' ' + changeWeek(day1.week) + ' ' + location;
                var weather1 = document.getElementById('weather1');
                weather1.innerHTML = '天气：' + day1.dayWeather + getIcon(day1.dayWeather);
                var temp1 = document.getElementById('temp1');
                temp1.innerText = '温度：' + day1.nightTemp + '~' + day1.dayTemp + '℃';
                var windir1 = document.getElementById('windir1');
                windir1.innerText = '风向：' + day1.dayWindDir + '风';
                var windpower1 = document.getElementById('windpower1');
                windpower1.innerText = '风力：' + day1.dayWindPower + '级';
                // 第二天
                var day2 = data.forecasts[1];
                var date2 = document.getElementById('date2');
                date2.innerText = day2.date + ' ' + changeWeek(day2.week) + ' ' + location;
                var weather2 = document.getElementById('weather2');
                weather2.innerHTML = '天气：' + day2.dayWeather + getIcon(day2.dayWeather);
                var temp2 = document.getElementById('temp2');
                temp2.innerText = '温度：' + day2.nightTemp + '~' + day2.dayTemp + '℃';
                var windir2 = document.getElementById('windir2');
                windir2.innerText = '风向：' + day2.dayWindDir + '风';
                var windpower2 = document.getElementById('windpower2');
                windpower2.innerText = '风力：' + day2.dayWindPower + '级'; 
            }
        })
    })
}

function changeWeek(week)
{
    weekList = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日',]
    week = weekList[week-1];
    return week
}

function getIcon(weather)
{
    var iconID = '';
    if(weather.indexOf("雷阵雨") != -1)
        iconID = '#icon-tianqizitiku22';
    else if(weather === '大雨')
        iconID = '#icon-tianqizitiku27';
    else if(weather === '中雨')
        iconID = '#icon-zhongyu';
    else if(weather === '阵雨')
        iconID = '#icon-zhenyu';
    else if(weather.indexOf('雾') != -1)
        iconID = '#icon-wu';
    else if(weather === '晴')
        iconID = '#icon-sun';
    else if(weather === '小雨')
        iconID = '#icon-xiaoyu';
    else if(weather === '多云')
        iconID = '#icon-duoyun';
    else if(weather === '阴')
        iconID = '#icon-yin';
    else if(weather === '雨夹雪')
        iconID = '#icon-yujiaxue';
    else if(weather.indexOf('暴雨') != -1)
        iconID = '#icon-tianqizitiku30';
    else if(weather.indexOf('雪') != -1)
        iconID = '#icon-xue';
    else if(weather.indexOf('雨') != -1)
        iconID = '#icon-zhongyu';
    else 
        return '';
    return '\xa0\xa0<svg class="icon" aria-hidden="true"><use xlink:href="' + iconID + '"></use></svg>'
}