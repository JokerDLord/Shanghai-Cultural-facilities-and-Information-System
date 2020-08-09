/* global varibles */
var map;
var allData;
var markers = new Array();
var highlightMarker;
var defaultMarker;
//var selectDiv; 用于设置点击特效
//所有cinema自动替换ktv即可
var exNames = new Array();
var satellite;
var roadNet;
var flag = 0;

function onLoad()
{
    map = new AMap.Map('map', {
        center:[121.464076,31.157165],
        zoom:10,
        zooms:[10, 20],
        mapStyle:'amap://styles/beb82e08f738af3f8343c259396e811c',
    });

    satellite = new AMap.TileLayer.Satellite();
    roadNet = new AMap.TileLayer.RoadNet();

    //创建比例尺控件对象
    map.plugin(["AMap.Scale"],function()
    {var scale = new AMap.Scale(); map.addControl(scale);});
    // 鹰眼控件
    map.plugin(["AMap.OverView"],function()
    {view = new AMap.OverView({isOpen: true});
	    map.addControl(view);
	});
    highlightMarker = new AMap.Icon({
        size: new AMap.Size(40, 62),    // 图标尺寸
        image: '/static/Markers/hl-icon.png',  // Icon的图像
        imageSize: new AMap.Size(20, 31),
        //anchor: 'bottom-center', // NMD，为什么没用
    });
    defaultMarker = new AMap.Marker().getIcon()
}

function sateLayer()
{
    if (flag==0) {
        map.add([satellite, roadNet]);
        flag = 1;
    }
    else {
        map.remove([satellite, roadNet]);
        flag = 0;
    }
}

function showQueryData() //没有用到API,不用改！
{
	$.ajax({ 
		method: "post",
		data: $("#query").serialize(), // 这个函数用于获取表单里的所有数据
		url: "exhibition-query",
		success: function(rawData){
            // rawData 是flask 传回的一个JSON 具体请看views.py里的query函数
			allData = JSON.parse(rawData);
			if(allData.success)
				allData = allData.content;
			else
			{
				window.alert(allData.error);
				return;
			}
		
            if(allData.length == 0)
            {window.alert("抱歉，没有符合条件的记录！");}
            else
            {
                $("#result").show(500);
                showResult(0);
            }
		}
	})
}

function showResult()
{
    map.clearMap();
    //selectDiv = 0;
    var num = 1;
	var resultDiv = document.getElementById("result");
	resultDiv.innerHTML = ""; // 先清空HTML里面的东西
    var viewArray = new Array();
	for(var i = 0; i < allData.length; i++)
	{
        var div = document.createElement("div");
        div.id = "info-" + String(num);//每一个影院对应一个容器div
        div.className = "infobox"; //NMD，爷不用bootstrap了！把内容塞到一行里就行了！

        var line1 = document.createElement("div");
        line1.className = "result-line";
		var name = document.createElement("span"); // 影院名x 此处是exhibition名
        name.className = "result-title"
		name.innerText = String(num) + ". " + allData[i].name;
        line1.appendChild(name);

        var line2 = document.createElement("div");
        line2.className = "result-line";
        var address = document.createElement("span"); // 地址
        address.className = "result-content";
        address.innerText = allData[i].address == "-1" ? "暂无地址" : (allData[i].address);
        line2.appendChild(address);

        //把评论数也加在line2里
        var line3 = document.createElement("div");
        line3.className = "result-line";
        var type = document.createElement("span"); // 展馆类型
        type.className = "result-content";
        var typeStr = "展馆类型： ";
        typeStr += allData[i].type;
        type.innerText = typeStr;
        line3.appendChild(type);

		div.appendChild(line1); // 把上面各项都装到div里
        div.appendChild(line2);
        div.appendChild(line3);
        resultDiv.appendChild(div);

        // 添加对应的marker
        var lnglat = new AMap.LngLat(parseFloat(allData[i].x), parseFloat(allData[i].y));
        viewArray[num] = lnglat;
        addMarker(lnglat, num, i);

        // 鼠标只能点击一次的效果
        div.innerID = num;
        $(div).on("mouseover", function(){
            syncHighlight(this, true);
        });
        $(div).on("click", function(){
            //每次只能点一个的代码去掉了
            /* if (this.innerID != selectDiv) {
                var lastTimeDiv = document.getElementById("info-" + selectDiv); //上一次选中的div
                if (lastTimeDiv) {
                    syncHighlight(lastTimeDiv, false);
                }
                selectDiv = this.innerID; */
                syncHighlight(this, true);
                map.panTo(markers[this.innerID].getPosition());
                map.setZoom(14);
            //}
        });
        $(div).on("mouseleave", function(){
            syncHighlight(this, false);
        });

        num = num + 1;
        if (num > allData.length) {break;}
	}
}

function syncHighlight(o, state)
{
    // 高亮or取消高亮显示 某个marker以及他对应的信息
    if(state)
    {
        $("#info-" + String(o.innerID)).css("background", "#FFF");
        var marker = markers[o.innerID];
        marker.setIcon(highlightMarker);
        //map.panTo(marker.getPosition()); 误触太严重，去掉
    }
    else
    {
        $("#info-" + String(o.innerID)).css("background", "rgba(255,255,255,0.7)");
        var marker = markers[o.innerID];
        marker.setIcon(defaultMarker);
    }
}


function clearQueryData()
{
	document.getElementById('query').reset();
	$("#result").hide(500);      // 隐藏搜索结果框
    $("#weather").hide(500);
    map.clearMap(); 
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

function removeOne(content)
{
    // 将-1转换为横线
    if(content == "-1" || content == '') return " - ";
    else return content;
}

function addMarker(lnglat, id, index)
{
    content = allData[index];
    //获取每一项信息
    name = content["name"];
    lng = content["x"];
    lat = content["y"];
    adcode = content["adcode"];
    adname = content["adname"];
    address = removeOne(content["address"]);
    type = content["type"]
    
    //创建标注对象
    var marker = new AMap.Marker({position: new AMap.LngLat(lng, lat), });
    marker.innerID = id; //给每个marker添加一个ID
    marker.exhibitionName = name;
    marker.adcode = adcode;

    markers[id] = marker;//将marker加入数组中
    
    //向地图上添加标注
    map.add(marker);// 将标注添加到地图中
    var sContent = //这里不用加评论数了
        "<div style='margin:0px;font-size:18px;font-weight:bold;color:#008000;padding:2px 0px;border-style:none;'>{0}</div>".format(name)+
        "<div style='margin-top:8px;margin-bottom:8px;font-size:13px;font-weight:normal;color:#008000;'>地址：{0}</div>".format(address)+
        "<div style='margin-bottom:8px;border-style:none none none solid;border-left:2px solid #32CD32;font-size:14px;color:#008000;padding:5px;background-color:#F0FFF0;'>展馆类型:{0}</div>".format(type);
    marker.on("click",function(){
        $("#weather").hide(150);
        weatherInfo(this.adcode);
        map.panTo(this.getPosition());
        openInfo(sContent, this);        
    });
}

function openInfo(content, marker)
{
    var point = marker.getPosition();
    //marker = new T.Marker(point);// 创建标注
    var markerInfoWin = new AMap.InfoWindow({content: content, offset:new AMap.Pixel(0,-30)}); // 创建信息窗口对象
    markerInfoWin.open(map, point); //开启信息窗口
};


function weatherInfo(city) //城市天气查询
{
    AMap.plugin('AMap.Weather', function() {
        var weather = new AMap.Weather();
        var weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = "";
        //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
        weather.getLive(city, function(err, data) {
            if (!err) {

                var line1 = document.createElement("div");
                line1.className = "weather-line"
                var title = document.createElement("span");
                title.className = "weather-title";
                title.innerText = '实时天气';
                line1.appendChild(title);

                var line2 = document.createElement("div");
                line2.className = "weather-line"
                var wea = document.createElement("span");
                wea.className = "weather-content";
                wea.innerText = '天气：' + data.weather;
                line2.appendChild(wea);

                var line3 = document.createElement("div");
                line3.className = "weather-line"
                var temp = document.createElement("span");
                temp.className = "weather-content";
                temp.innerText = '温度：' + data.temperature + '℃';
                line3.appendChild(temp);

                var line4 = document.createElement("div");
                line4.className = "weather-line"
                var windD = document.createElement("span");
                windD.className = "weather-content";
                windD.innerText = '风向：' + data.windDirection;
                line4.appendChild(windD);

                var line5 = document.createElement("div");
                line5.className = "weather-line"
                var windP = document.createElement("span");
                windP.className = "weather-content";
                windP.innerText = '风力：' + data.windPower + '级';
                line5.appendChild(windP);

                var line6 = document.createElement("div");
                line6.className = "weather-line"
                var humid = document.createElement("span");
                humid.className = "weather-content";
                humid.innerText = '空气湿度：' + data.humidity + '%';
                line6.appendChild(humid);

                weatherDiv.appendChild(line1);
                weatherDiv.appendChild(line2);
                weatherDiv.appendChild(line3);
                weatherDiv.appendChild(line4);
                weatherDiv.appendChild(line5);
                weatherDiv.appendChild(line6);
                $("#weather").show(150);
                
            }
        })
    })
}