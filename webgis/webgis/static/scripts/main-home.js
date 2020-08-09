function onLoad()
{
    var map = new AMap.Map('map', {
        center:[121.469897,31.23138],
        zoom:10,
        mapStyle:'amap://styles/whitesmoke',
    });

    var chart_chart1 = echarts.init(
        document.getElementById('chart1'), 'macarons', {renderer: 'canvas'});
    var option_chart1 = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"series": [
    {
        "type": "bar",
        "name": "\u7535\u5f71\u9662",
        "data": [
            23,
            25,
            16,
            16,
            25,
            18,
            21,
            60,
            33,
            34,
            89,
            11,
            32,
            25,
            18,
            4
        ],
        "barCategoryGap": "20%",
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "bar",
        "name": "KTV",
        "data": [
            28,
            24,
            21,
            26,
            38,
            26,
            36,
            112,
            86,
            72,
            188,
            46,
            72,
            55,
            48,
            18
        ],
        "barCategoryGap": "20%",
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    }
],
"legend": [
    {
        "data": [
            "\u7535\u5f71\u9662",
            "KTV"
        ],
        "selected": {
            "\u7535\u5f71\u9662": true,
            "KTV": true
        },
        "show": true,
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14
    }
],
"tooltip": {
    "show": true,
    "trigger": "item",
    "triggerOn": "mousemove|click",
    "axisPointer": {
        "type": "line"
    },
    "textStyle": {
        "fontSize": 14
    },
    "borderWidth": 0
},
"xAxis": [
    {
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "axisLabel": {
            "show": true,
            "position": "top",
            "margin": 8,
            "interval": 0
        },
        "inverse": false,
        "offset": 0,
        "splitNumber": 5,
        "minInterval": 0,
        "splitLine": {
            "show": false,
            "lineStyle": {
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            }
        },
        "data": [
            "\u9ec4\u6d66\u533a",
            "\u5f90\u6c47\u533a",
            "\u957f\u5b81\u533a",
            "\u9759\u5b89\u533a",
            "\u666e\u9640\u533a",
            "\u8679\u53e3\u533a",
            "\u6768\u6d66\u533a",
            "\u95f5\u884c\u533a",
            "\u5b9d\u5c71\u533a",
            "\u5609\u5b9a\u533a",
            "\u6d66\u4e1c\u65b0\u533a",
            "\u91d1\u5c71\u533a",
            "\u677e\u6c5f\u533a",
            "\u9752\u6d66\u533a",
            "\u5949\u8d24\u533a",
            "\u5d07\u660e\u533a"
        ]
    }
],
"yAxis": [
    {
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "inverse": false,
        "offset": 0,
        "splitNumber": 5,
        "minInterval": 0,
        "splitLine": {
            "show": false,
            "lineStyle": {
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            }
        }
    }
],
"title": [
    {
        "text": "\u4e0a\u6d77\u5e02\u7535\u5f71\u9662\u4e0eKTV\u5206\u5e03\u60c5\u51b5",
        "padding": 5,
        "itemGap": 10
    }
]
};
    chart_chart1.setOption(option_chart1);

    var chart_chart2 = echarts.init(
        document.getElementById('chart2'), 'macarons', {renderer: 'canvas'});
    var option_chart2 = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"series": [
    {
        "type": "bar",
        "name": "\u5c55\u89c8\u9986",
        "data": [
            71,
            30,
            21,
            28,
            29,
            20,
            23,
            35,
            21,
            27,
            130,
            10,
            16,
            23,
            8,
            8
        ],
        "barCategoryGap": "20%",
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "bar",
        "name": "\u56fe\u4e66\u9986",
        "data": [
            22,
            54,
            18,
            27,
            18,
            10,
            50,
            28,
            25,
            47,
            78,
            8,
            21,
            9,
            14,
            11
        ],
        "barCategoryGap": "20%",
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "bar",
        "name": "\u7f8e\u672f\u9986",
        "data": [
            28,
            29,
            16,
            12,
            18,
            9,
            12,
            31,
            10,
            12,
            45,
            1,
            19,
            11,
            4,
            2
        ],
        "barCategoryGap": "20%",
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "bar",
        "name": "\u7eaa\u5ff5\u9986",
        "data": [
            34,
            42,
            12,
            47,
            3,
            27,
            2,
            9,
            7,
            5,
            13,
            5,
            6,
            8,
            5,
            10
        ],
        "barCategoryGap": "20%",
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "bar",
        "name": "\u535a\u7269\u9986",
        "data": [
            32,
            23,
            11,
            6,
            12,
            11,
            12,
            15,
            12,
            16,
            25,
            7,
            10,
            5,
            5,
            6
        ],
        "barCategoryGap": "20%",
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "bar",
        "name": "\u79d1\u6280\u9986",
        "data": [
            4,
            4,
            1,
            4,
            2,
            3,
            7,
            7,
            4,
            1,
            20,
            2,
            4,
            1,
            1,
            2
        ],
        "stack": "stack6",
        "barCategoryGap": "20%",
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "bar",
        "name": "\u6c34\u65cf\u9986",
        "data": [
            0,
            3,
            0,
            2,
            4,
            1,
            2,
            6,
            5,
            1,
            11,
            1,
            2,
            1,
            1,
            0
        ],
        "stack": "stack6",
        "barCategoryGap": "20%",
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "bar",
        "name": "\u5929\u6587\u9986",
        "data": [
            1,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            1,
            0
        ],
        "stack": "stack6",
        "barCategoryGap": "20%",
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    }
],
"legend": [
    {
        "data": [
            "\u5c55\u89c8\u9986",
            "\u56fe\u4e66\u9986",
            "\u7f8e\u672f\u9986",
            "\u7eaa\u5ff5\u9986",
            "\u535a\u7269\u9986",
            "\u79d1\u6280\u9986",
            "\u6c34\u65cf\u9986",
            "\u5929\u6587\u9986"
        ],
        "selected": {
            "\u5c55\u89c8\u9986": true,
            "\u56fe\u4e66\u9986": true,
            "\u7f8e\u672f\u9986": true,
            "\u7eaa\u5ff5\u9986": true,
            "\u535a\u7269\u9986": true,
            "\u79d1\u6280\u9986": true,
            "\u6c34\u65cf\u9986": true,
            "\u5929\u6587\u9986": true
        },
        "show": true,
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14
    }
],
"tooltip": {
    "show": true,
    "trigger": "item",
    "triggerOn": "mousemove|click",
    "axisPointer": {
        "type": "line"
    },
    "textStyle": {
        "fontSize": 14
    },
    "borderWidth": 0
},
"xAxis": [
    {
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "axisLabel": {
            "show": true,
            "position": "top",
            "margin": 8,
            "interval": 0
        },
        "inverse": false,
        "offset": 0,
        "splitNumber": 5,
        "minInterval": 0,
        "splitLine": {
            "show": false,
            "lineStyle": {
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            }
        },
        "data": [
            "\u9ec4\u6d66\u533a",
            "\u5f90\u6c47\u533a",
            "\u957f\u5b81\u533a",
            "\u9759\u5b89\u533a",
            "\u666e\u9640\u533a",
            "\u8679\u53e3\u533a",
            "\u6768\u6d66\u533a",
            "\u95f5\u884c\u533a",
            "\u5b9d\u5c71\u533a",
            "\u5609\u5b9a\u533a",
            "\u6d66\u4e1c\u65b0\u533a",
            "\u91d1\u5c71\u533a",
            "\u677e\u6c5f\u533a",
            "\u9752\u6d66\u533a",
            "\u5949\u8d24\u533a",
            "\u5d07\u660e\u533a"
        ]
    }
],
"yAxis": [
    {
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "inverse": false,
        "offset": 0,
        "splitNumber": 5,
        "minInterval": 0,
        "splitLine": {
            "show": false,
            "lineStyle": {
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            }
        }
    }
],
"title": [
    {
        "text": "\u4e0a\u6d77\u5e02\u5c55\u89c8\u9986\u5206\u5e03\u60c5\u51b5",
        "padding": 5,
        "itemGap": 10
    }
]
};
    chart_chart2.setOption(option_chart2);

    var chart_chart3Left = echarts.init(
        document.getElementById('chart3Left'), 'macarons', {renderer: 'canvas'});
    var option_chart3Left = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"series": [
    {
        "type": "pie",
        "clockwise": true,
        "data": [
            {
                "name": "\u7535\u5f71\u9662",
                "value": 450
            },
            {
                "name": "KTV",
                "value": 896
            },
            {
                "name": "\u5c55\u89c8\u9986",
                "value": 500
            },
            {
                "name": "\u56fe\u4e66\u9986",
                "value": 440
            },
            {
                "name": "\u5929\u6587\u9986",
                "value": 6
            },
            {
                "name": "\u6c34\u65cf\u9986",
                "value": 40
            },
            {
                "name": "\u7f8e\u672f\u9986",
                "value": 259
            },
            {
                "name": "\u79d1\u6280\u9986",
                "value": 67
            },
            {
                "name": "\u7eaa\u5ff5\u9986",
                "value": 235
            },
            {
                "name": "\u535a\u7269\u9986",
                "value": 208
            }
        ],
        "radius": [
            "0%",
            "75%"
        ],
        "center": [
            "40%",
            "54%"
        ],
        "label": {
            "show": true,
            "position": "top",
            "margin": 8,
            "formatter": "{b}: {c}"
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    }
],
"legend": [
    {
        "data": [
            "\u7535\u5f71\u9662",
            "KTV",
            "\u5c55\u89c8\u9986",
            "\u56fe\u4e66\u9986",
            "\u5929\u6587\u9986",
            "\u6c34\u65cf\u9986",
            "\u7f8e\u672f\u9986",
            "\u79d1\u6280\u9986",
            "\u7eaa\u5ff5\u9986",
            "\u535a\u7269\u9986"
        ],
        "selected": {},
        "type": "scroll",
        "show": true,
        "left": "80%",
        "top": "20%",
        "orient": "vertical",
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14
    }
],
"tooltip": {
    "show": true,
    "trigger": "item",
    "triggerOn": "mousemove|click",
    "axisPointer": {
        "type": "line"
    },
    "textStyle": {
        "fontSize": 14
    },
    "borderWidth": 0
},
"title": [
    {
        "text": "\u4e0a\u6d77\u5e02\u6587\u5a31\u8bbe\u65bd\u5206\u7c7b\u6570\u91cf\u60c5\u51b5",
        "padding": 5,
        "itemGap": 10
    }
]
};
    chart_chart3Left.setOption(option_chart3Left);

    var chart_chart3Right = echarts.init(
        document.getElementById('chart3Right'), 'macarons', {renderer: 'canvas'});
    var option_chart3Right = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"series": [
    {
        "type": "pie",
        "clockwise": true,
        "data": [
            {
                "name": "\u9ec4\u6d66\u533a",
                "value": 243
            },
            {
                "name": "\u5f90\u6c47\u533a",
                "value": 235
            },
            {
                "name": "\u957f\u5b81\u533a",
                "value": 116
            },
            {
                "name": "\u9759\u5b89\u533a",
                "value": 168
            },
            {
                "name": "\u666e\u9640\u533a",
                "value": 149
            },
            {
                "name": "\u8679\u53e3\u533a",
                "value": 125
            },
            {
                "name": "\u6768\u6d66\u533a",
                "value": 166
            },
            {
                "name": "\u95f5\u884c\u533a",
                "value": 303
            },
            {
                "name": "\u5b9d\u5c71\u533a",
                "value": 203
            },
            {
                "name": "\u5609\u5b9a\u533a",
                "value": 215
            },
            {
                "name": "\u6d66\u4e1c\u65b0\u533a",
                "value": 600
            },
            {
                "name": "\u91d1\u5c71\u533a",
                "value": 91
            },
            {
                "name": "\u677e\u6c5f\u533a",
                "value": 183
            },
            {
                "name": "\u9752\u6d66\u533a",
                "value": 138
            },
            {
                "name": "\u5949\u8d24\u533a",
                "value": 105
            },
            {
                "name": "\u5d07\u660e\u533a",
                "value": 61
            }
        ],
        "radius": [
            "0%",
            "75%"
        ],
        "center": [
            "40%",
            "54%"
        ],
        "label": {
            "show": true,
            "position": "top",
            "margin": 8,
            "formatter": "{b}: {c}"
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    }
],
"legend": [
    {
        "data": [
            "\u9ec4\u6d66\u533a",
            "\u5f90\u6c47\u533a",
            "\u957f\u5b81\u533a",
            "\u9759\u5b89\u533a",
            "\u666e\u9640\u533a",
            "\u8679\u53e3\u533a",
            "\u6768\u6d66\u533a",
            "\u95f5\u884c\u533a",
            "\u5b9d\u5c71\u533a",
            "\u5609\u5b9a\u533a",
            "\u6d66\u4e1c\u65b0\u533a",
            "\u91d1\u5c71\u533a",
            "\u677e\u6c5f\u533a",
            "\u9752\u6d66\u533a",
            "\u5949\u8d24\u533a",
            "\u5d07\u660e\u533a"
        ],
        "selected": {},
        "type": "scroll",
        "show": true,
        "left": "80%",
        "top": "5%",
        "orient": "vertical",
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14
    }
],
"tooltip": {
    "show": true,
    "trigger": "item",
    "triggerOn": "mousemove|click",
    "axisPointer": {
        "type": "line"
    },
    "textStyle": {
        "fontSize": 14
    },
    "borderWidth": 0
},
"title": [
    {
        "text": "\u4e0a\u6d77\u5e02\u6587\u5a31\u8bbe\u65bd\u5206\u533a\u6570\u91cf\u60c5\u51b5",
        "padding": 5,
        "itemGap": 10
    }
]
};
    chart_chart3Right.setOption(option_chart3Right);

    var chart_chart4Left = echarts.init(
        document.getElementById('chart4Left'), 'macarons', {renderer: 'canvas'});
    var option_chart4Left = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"series": [
    {
        "type": "radar",
        "name": "\u9ec4\u6d66\u533a",
        "data": [
            [
                8.75,
                8.51,
                8.48
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#DC143C"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u5f90\u6c47\u533a",
        "data": [
            [
                8.98,
                8.91,
                8.87
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#ADFF2F"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u957f\u5b81\u533a",
        "data": [
            [
                8.83,
                8.69,
                8.64
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#FFD700"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u9759\u5b89\u533a",
        "data": [
            [
                9.03,
                8.91,
                8.85
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#4169E1"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u666e\u9640\u533a",
        "data": [
            [
                8.83,
                8.63,
                8.6
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#FFA500"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u8679\u53e3\u533a",
        "data": [
            [
                8.78,
                8.62,
                8.55
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#00CED1"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u6768\u6d66\u533a",
        "data": [
            [
                8.76,
                8.66,
                8.57
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#8B4513"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u95f5\u884c\u533a",
        "data": [
            [
                8.69,
                8.53,
                8.53
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#8B008B"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u5b9d\u5c71\u533a",
        "data": [
            [
                8.74,
                8.52,
                8.51
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#BDB76B"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u5609\u5b9a\u533a",
        "data": [
            [
                8.82,
                8.69,
                8.56
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#4682B4"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u6d66\u4e1c\u65b0\u533a",
        "data": [
            [
                8.69,
                8.5,
                8.45
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#F08080"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u91d1\u5c71\u533a",
        "data": [
            [
                8.52,
                8.35,
                8.27
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#7B68EE"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u677e\u6c5f\u533a",
        "data": [
            [
                8.82,
                8.69,
                8.67
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#CD853F"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u9752\u6d66\u533a",
        "data": [
            [
                8.3,
                8.19,
                7.99
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#3CB371"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u5949\u8d24\u533a",
        "data": [
            [
                8.78,
                8.71,
                8.64
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#FFFF00"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u5d07\u660e\u533a",
        "data": [
            [
                7.9,
                7.8,
                7.85
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#FF1493"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    }
],
"legend": [
    {
        "data": [
            "\u9ec4\u6d66\u533a",
            "\u5f90\u6c47\u533a",
            "\u957f\u5b81\u533a",
            "\u9759\u5b89\u533a",
            "\u666e\u9640\u533a",
            "\u8679\u53e3\u533a",
            "\u6768\u6d66\u533a",
            "\u95f5\u884c\u533a",
            "\u5b9d\u5c71\u533a",
            "\u5609\u5b9a\u533a",
            "\u6d66\u4e1c\u65b0\u533a",
            "\u91d1\u5c71\u533a",
            "\u677e\u6c5f\u533a",
            "\u9752\u6d66\u533a",
            "\u5949\u8d24\u533a",
            "\u5d07\u660e\u533a"
        ],
        "selected": {
            "\u9ec4\u6d66\u533a": true,
            "\u5f90\u6c47\u533a": true,
            "\u957f\u5b81\u533a": true,
            "\u9759\u5b89\u533a": true,
            "\u666e\u9640\u533a": true,
            "\u8679\u53e3\u533a": true,
            "\u6768\u6d66\u533a": true,
            "\u95f5\u884c\u533a": true,
            "\u5b9d\u5c71\u533a": true,
            "\u5609\u5b9a\u533a": true,
            "\u6d66\u4e1c\u65b0\u533a": true,
            "\u91d1\u5c71\u533a": true,
            "\u677e\u6c5f\u533a": true,
            "\u9752\u6d66\u533a": true,
            "\u5949\u8d24\u533a": true,
            "\u5d07\u660e\u533a": true
        },
        "type": "scroll",
        "show": true,
        "left": "80%",
        "top": "10%",
        "orient": "vertical",
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14
    }
],
"tooltip": {
    "show": true,
    "trigger": "item",
    "triggerOn": "mousemove|click",
    "axisPointer": {
        "type": "line"
    },
    "textStyle": {
        "fontSize": 14
    },
    "borderWidth": 0
},
"radar": {
    "indicator": [
        {
            "name": "\u89c6\u6548\u5206",
            "max": 9.1,
            "min": 7.8
        },
        {
            "name": "\u73af\u5883\u5206",
            "max": 9.1,
            "min": 7.8
        },
        {
            "name": "\u670d\u52a1\u5206",
            "max": 9.1,
            "min": 7.8
        }
    ],
    "shape": "polygon",
    "center": [
        "40%",
        "62%"
    ],
    "radius": "100%",
    "name": {
        "textStyle": {}
    },
    "splitLine": {
        "show": true,
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        }
    },
    "splitArea": {
        "show": true,
        "areaStyle": {
            "opacity": 0
        }
    },
    "axisLine": {
        "show": true,
        "onZero": true,
        "onZeroAxisIndex": 0
    }
},
"title": [
    {
        "text": "\u4e0a\u6d77\u5e02\u5404\u533a\u7535\u5f71\u9662\u8bc4\u5206\u60c5\u51b5\uff08\u53d6\u5e73\u5747\u5206\uff09",
        "padding": 5,
        "itemGap": 10
    }
]
};
    chart_chart4Left.setOption(option_chart4Left);

    var chart_chart4Right = echarts.init(
        document.getElementById('chart4Right'), 'macarons', {renderer: 'canvas'});
    var option_chart4Right = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"series": [
    {
        "type": "radar",
        "name": "\u9ec4\u6d66\u533a",
        "data": [
            [
                8.47,
                8.5,
                8.4
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#DC143C"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u5f90\u6c47\u533a",
        "data": [
            [
                8.05,
                8.21,
                7.93
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#ADFF2F"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u957f\u5b81\u533a",
        "data": [
            [
                8.19,
                8.41,
                8.06
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#FFD700"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u9759\u5b89\u533a",
        "data": [
            [
                7.86,
                7.88,
                7.88
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#4169E1"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u666e\u9640\u533a",
        "data": [
            [
                8.04,
                8.14,
                8.0
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#FFA500"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u8679\u53e3\u533a",
        "data": [
            [
                7.99,
                8.0,
                8.0
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#00CED1"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u6768\u6d66\u533a",
        "data": [
            [
                8.26,
                8.28,
                8.17
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#8B4513"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u95f5\u884c\u533a",
        "data": [
            [
                8.17,
                8.17,
                8.09
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#8B008B"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u5b9d\u5c71\u533a",
        "data": [
            [
                8.07,
                8.15,
                8.04
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#BDB76B"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u5609\u5b9a\u533a",
        "data": [
            [
                8.05,
                8.09,
                7.89
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#4682B4"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u6d66\u4e1c\u65b0\u533a",
        "data": [
            [
                7.94,
                7.97,
                7.88
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#F08080"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u91d1\u5c71\u533a",
        "data": [
            [
                7.65,
                7.71,
                7.62
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#7B68EE"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u677e\u6c5f\u533a",
        "data": [
            [
                7.91,
                7.92,
                7.9
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#CD853F"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u9752\u6d66\u533a",
        "data": [
            [
                7.98,
                8.0,
                7.83
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#3CB371"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u5949\u8d24\u533a",
        "data": [
            [
                7.59,
                7.7,
                7.61
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#FFFF00"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "radar",
        "name": "\u5d07\u660e\u533a",
        "data": [
            [
                7.66,
                7.62,
                7.5
            ]
        ],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "normal": {
                "color": "#FF1493"
            }
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    }
],
"legend": [
    {
        "data": [
            "\u9ec4\u6d66\u533a",
            "\u5f90\u6c47\u533a",
            "\u957f\u5b81\u533a",
            "\u9759\u5b89\u533a",
            "\u666e\u9640\u533a",
            "\u8679\u53e3\u533a",
            "\u6768\u6d66\u533a",
            "\u95f5\u884c\u533a",
            "\u5b9d\u5c71\u533a",
            "\u5609\u5b9a\u533a",
            "\u6d66\u4e1c\u65b0\u533a",
            "\u91d1\u5c71\u533a",
            "\u677e\u6c5f\u533a",
            "\u9752\u6d66\u533a",
            "\u5949\u8d24\u533a",
            "\u5d07\u660e\u533a"
        ],
        "selected": {
            "\u9ec4\u6d66\u533a": true,
            "\u5f90\u6c47\u533a": true,
            "\u957f\u5b81\u533a": true,
            "\u9759\u5b89\u533a": true,
            "\u666e\u9640\u533a": true,
            "\u8679\u53e3\u533a": true,
            "\u6768\u6d66\u533a": true,
            "\u95f5\u884c\u533a": true,
            "\u5b9d\u5c71\u533a": true,
            "\u5609\u5b9a\u533a": true,
            "\u6d66\u4e1c\u65b0\u533a": true,
            "\u91d1\u5c71\u533a": true,
            "\u677e\u6c5f\u533a": true,
            "\u9752\u6d66\u533a": true,
            "\u5949\u8d24\u533a": true,
            "\u5d07\u660e\u533a": true
        },
        "type": "scroll",
        "show": true,
        "left": "80%",
        "top": "10%",
        "orient": "vertical",
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14
    }
],
"tooltip": {
    "show": true,
    "trigger": "item",
    "triggerOn": "mousemove|click",
    "axisPointer": {
        "type": "line"
    },
    "textStyle": {
        "fontSize": 14
    },
    "borderWidth": 0
},
"radar": {
    "indicator": [
        {
            "name": "\u89c6\u6548\u5206",
            "max": 8.5,
            "min": 7.5
        },
        {
            "name": "\u73af\u5883\u5206",
            "max": 8.5,
            "min": 7.5
        },
        {
            "name": "\u670d\u52a1\u5206",
            "max": 8.5,
            "min": 7.5
        }
    ],
    "shape": "polygon",
    "center": [
        "40%",
        "62%"
    ],
    "radius": "100%",
    "name": {
        "textStyle": {}
    },
    "splitLine": {
        "show": true,
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        }
    },
    "splitArea": {
        "show": true,
        "areaStyle": {
            "opacity": 0
        }
    },
    "axisLine": {
        "show": true,
        "onZero": true,
        "onZeroAxisIndex": 0
    }
},
"title": [
    {
        "text": "\u4e0a\u6d77\u5e02\u5404\u533aKTV\u8bc4\u5206\u60c5\u51b5\uff08\u53d6\u5e73\u5747\u5206\uff09",
        "padding": 5,
        "itemGap": 10
    }
]
};
    chart_chart4Right.setOption(option_chart4Right);

    var chart_chart5 = echarts.init(
        document.getElementById('chart5'), 'macarons', {renderer: 'canvas'});
    var option_chart5 = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"series": [
    {
        "type": "line",
        "name": "\u7535\u5f71\u9662\u603b\u6570",
        "connectNulls": false,
        "symbolSize": 4,
        "showSymbol": true,
        "smooth": false,
        "step": false,
        "data": [
            [
                "1928\u5e74",
                1
            ],
            [
                "1929\u5e74",
                2
            ],
            [
                "1930\u5e74",
                4
            ],
            [
                "1931\u5e74",
                4
            ],
            [
                "1932\u5e74",
                5
            ],
            [
                "1933\u5e74",
                5
            ],
            [
                "1934\u5e74",
                5
            ],
            [
                "1935\u5e74",
                5
            ],
            [
                "1936\u5e74",
                5
            ],
            [
                "1937\u5e74",
                5
            ],
            [
                "1938\u5e74",
                5
            ],
            [
                "1939\u5e74",
                5
            ],
            [
                "1940\u5e74",
                5
            ],
            [
                "1941\u5e74",
                5
            ],
            [
                "1942\u5e74",
                6
            ],
            [
                "1943\u5e74",
                6
            ],
            [
                "1944\u5e74",
                6
            ],
            [
                "1945\u5e74",
                6
            ],
            [
                "1946\u5e74",
                6
            ],
            [
                "1947\u5e74",
                6
            ],
            [
                "1948\u5e74",
                6
            ],
            [
                "1949\u5e74",
                7
            ],
            [
                "1950\u5e74",
                7
            ],
            [
                "1951\u5e74",
                7
            ],
            [
                "1952\u5e74",
                7
            ],
            [
                "1953\u5e74",
                7
            ],
            [
                "1954\u5e74",
                7
            ],
            [
                "1955\u5e74",
                7
            ],
            [
                "1956\u5e74",
                7
            ],
            [
                "1957\u5e74",
                7
            ],
            [
                "1958\u5e74",
                7
            ],
            [
                "1959\u5e74",
                8
            ],
            [
                "1960\u5e74",
                8
            ],
            [
                "1961\u5e74",
                8
            ],
            [
                "1962\u5e74",
                8
            ],
            [
                "1963\u5e74",
                8
            ],
            [
                "1964\u5e74",
                8
            ],
            [
                "1965\u5e74",
                8
            ],
            [
                "1966\u5e74",
                8
            ],
            [
                "1967\u5e74",
                8
            ],
            [
                "1968\u5e74",
                8
            ],
            [
                "1969\u5e74",
                8
            ],
            [
                "1970\u5e74",
                8
            ],
            [
                "1971\u5e74",
                8
            ],
            [
                "1972\u5e74",
                8
            ],
            [
                "1973\u5e74",
                8
            ],
            [
                "1974\u5e74",
                8
            ],
            [
                "1975\u5e74",
                8
            ],
            [
                "1976\u5e74",
                8
            ],
            [
                "1977\u5e74",
                8
            ],
            [
                "1978\u5e74",
                8
            ],
            [
                "1979\u5e74",
                8
            ],
            [
                "1980\u5e74",
                12
            ],
            [
                "1981\u5e74",
                12
            ],
            [
                "1982\u5e74",
                12
            ],
            [
                "1983\u5e74",
                12
            ],
            [
                "1984\u5e74",
                13
            ],
            [
                "1985\u5e74",
                14
            ],
            [
                "1986\u5e74",
                17
            ],
            [
                "1987\u5e74",
                17
            ],
            [
                "1988\u5e74",
                17
            ],
            [
                "1989\u5e74",
                18
            ],
            [
                "1990\u5e74",
                20
            ],
            [
                "1991\u5e74",
                22
            ],
            [
                "1992\u5e74",
                22
            ],
            [
                "1993\u5e74",
                22
            ],
            [
                "1994\u5e74",
                22
            ],
            [
                "1995\u5e74",
                22
            ],
            [
                "1996\u5e74",
                23
            ],
            [
                "1997\u5e74",
                24
            ],
            [
                "1998\u5e74",
                25
            ],
            [
                "1999\u5e74",
                25
            ],
            [
                "2000\u5e74",
                26
            ],
            [
                "2001\u5e74",
                28
            ],
            [
                "2002\u5e74",
                28
            ],
            [
                "2003\u5e74",
                33
            ],
            [
                "2004\u5e74",
                34
            ],
            [
                "2005\u5e74",
                36
            ],
            [
                "2006\u5e74",
                39
            ],
            [
                "2007\u5e74",
                41
            ],
            [
                "2008\u5e74",
                44
            ],
            [
                "2009\u5e74",
                51
            ],
            [
                "2010\u5e74",
                61
            ],
            [
                "2011\u5e74",
                72
            ],
            [
                "2012\u5e74",
                90
            ],
            [
                "2013\u5e74",
                115
            ],
            [
                "2014\u5e74",
                144
            ],
            [
                "2015\u5e74",
                163
            ],
            [
                "2016\u5e74",
                212
            ],
            [
                "2017\u5e74",
                268
            ],
            [
                "2018\u5e74",
                312
            ],
            [
                "2019\u5e74",
                336
            ]
        ],
        "hoverAnimation": true,
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0.5
        },
        "zlevel": 0,
        "z": 0,
        "axisLine": {
            "show": true,
            "onZero": true,
            "onZeroAxisIndex": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    },
    {
        "type": "line",
        "name": "\u6b64\u5e74\u65b0\u589e\u7535\u5f71\u9662\u6570",
        "connectNulls": false,
        "yAxisIndex": 1,
        "symbolSize": 4,
        "showSymbol": true,
        "smooth": false,
        "step": false,
        "data": [
            [
                "1928\u5e74",
                1
            ],
            [
                "1929\u5e74",
                1
            ],
            [
                "1930\u5e74",
                2
            ],
            [
                "1931\u5e74",
                0
            ],
            [
                "1932\u5e74",
                1
            ],
            [
                "1933\u5e74",
                0
            ],
            [
                "1934\u5e74",
                0
            ],
            [
                "1935\u5e74",
                0
            ],
            [
                "1936\u5e74",
                0
            ],
            [
                "1937\u5e74",
                0
            ],
            [
                "1938\u5e74",
                0
            ],
            [
                "1939\u5e74",
                0
            ],
            [
                "1940\u5e74",
                0
            ],
            [
                "1941\u5e74",
                0
            ],
            [
                "1942\u5e74",
                1
            ],
            [
                "1943\u5e74",
                0
            ],
            [
                "1944\u5e74",
                0
            ],
            [
                "1945\u5e74",
                0
            ],
            [
                "1946\u5e74",
                0
            ],
            [
                "1947\u5e74",
                0
            ],
            [
                "1948\u5e74",
                0
            ],
            [
                "1949\u5e74",
                1
            ],
            [
                "1950\u5e74",
                0
            ],
            [
                "1951\u5e74",
                0
            ],
            [
                "1952\u5e74",
                0
            ],
            [
                "1953\u5e74",
                0
            ],
            [
                "1954\u5e74",
                0
            ],
            [
                "1955\u5e74",
                0
            ],
            [
                "1956\u5e74",
                0
            ],
            [
                "1957\u5e74",
                0
            ],
            [
                "1958\u5e74",
                0
            ],
            [
                "1959\u5e74",
                1
            ],
            [
                "1960\u5e74",
                0
            ],
            [
                "1961\u5e74",
                0
            ],
            [
                "1962\u5e74",
                0
            ],
            [
                "1963\u5e74",
                0
            ],
            [
                "1964\u5e74",
                0
            ],
            [
                "1965\u5e74",
                0
            ],
            [
                "1966\u5e74",
                0
            ],
            [
                "1967\u5e74",
                0
            ],
            [
                "1968\u5e74",
                0
            ],
            [
                "1969\u5e74",
                0
            ],
            [
                "1970\u5e74",
                0
            ],
            [
                "1971\u5e74",
                0
            ],
            [
                "1972\u5e74",
                0
            ],
            [
                "1973\u5e74",
                0
            ],
            [
                "1974\u5e74",
                0
            ],
            [
                "1975\u5e74",
                0
            ],
            [
                "1976\u5e74",
                0
            ],
            [
                "1977\u5e74",
                0
            ],
            [
                "1978\u5e74",
                0
            ],
            [
                "1979\u5e74",
                0
            ],
            [
                "1980\u5e74",
                4
            ],
            [
                "1981\u5e74",
                0
            ],
            [
                "1982\u5e74",
                0
            ],
            [
                "1983\u5e74",
                0
            ],
            [
                "1984\u5e74",
                1
            ],
            [
                "1985\u5e74",
                1
            ],
            [
                "1986\u5e74",
                3
            ],
            [
                "1987\u5e74",
                0
            ],
            [
                "1988\u5e74",
                0
            ],
            [
                "1989\u5e74",
                1
            ],
            [
                "1990\u5e74",
                2
            ],
            [
                "1991\u5e74",
                2
            ],
            [
                "1992\u5e74",
                0
            ],
            [
                "1993\u5e74",
                0
            ],
            [
                "1994\u5e74",
                0
            ],
            [
                "1995\u5e74",
                0
            ],
            [
                "1996\u5e74",
                1
            ],
            [
                "1997\u5e74",
                1
            ],
            [
                "1998\u5e74",
                1
            ],
            [
                "1999\u5e74",
                0
            ],
            [
                "2000\u5e74",
                1
            ],
            [
                "2001\u5e74",
                2
            ],
            [
                "2002\u5e74",
                0
            ],
            [
                "2003\u5e74",
                5
            ],
            [
                "2004\u5e74",
                1
            ],
            [
                "2005\u5e74",
                2
            ],
            [
                "2006\u5e74",
                3
            ],
            [
                "2007\u5e74",
                2
            ],
            [
                "2008\u5e74",
                3
            ],
            [
                "2009\u5e74",
                7
            ],
            [
                "2010\u5e74",
                10
            ],
            [
                "2011\u5e74",
                11
            ],
            [
                "2012\u5e74",
                18
            ],
            [
                "2013\u5e74",
                25
            ],
            [
                "2014\u5e74",
                29
            ],
            [
                "2015\u5e74",
                19
            ],
            [
                "2016\u5e74",
                49
            ],
            [
                "2017\u5e74",
                56
            ],
            [
                "2018\u5e74",
                44
            ],
            [
                "2019\u5e74",
                24
            ]
        ],
        "hoverAnimation": true,
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        },
        "areaStyle": {
            "opacity": 0.5
        },
        "zlevel": 0,
        "z": 0,
        "axisLine": {
            "show": true,
            "onZero": true,
            "onZeroAxisIndex": 0
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    }
],
"legend": [
    {
        "data": [
            "\u7535\u5f71\u9662\u603b\u6570",
            "\u6b64\u5e74\u65b0\u589e\u7535\u5f71\u9662\u6570"
        ],
        "selected": {
            "\u7535\u5f71\u9662\u603b\u6570": true,
            "\u6b64\u5e74\u65b0\u589e\u7535\u5f71\u9662\u6570": true
        },
        "show": true,
        "left": "80%",
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14
    }
],
"tooltip": {
    "show": true,
    "trigger": "axis",
    "triggerOn": "mousemove|click",
    "axisPointer": {
        "type": "cross"
    },
    "textStyle": {
        "fontSize": 14
    },
    "borderWidth": 0
},
"xAxis": [
    {
        "type": "category",
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "inverse": false,
        "offset": 0,
        "splitNumber": 5,
        "boundaryGap": false,
        "minInterval": 0,
        "splitLine": {
            "show": false,
            "lineStyle": {
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            }
        },
        "data": [
            "1928\u5e74",
            "1929\u5e74",
            "1930\u5e74",
            "1931\u5e74",
            "1932\u5e74",
            "1933\u5e74",
            "1934\u5e74",
            "1935\u5e74",
            "1936\u5e74",
            "1937\u5e74",
            "1938\u5e74",
            "1939\u5e74",
            "1940\u5e74",
            "1941\u5e74",
            "1942\u5e74",
            "1943\u5e74",
            "1944\u5e74",
            "1945\u5e74",
            "1946\u5e74",
            "1947\u5e74",
            "1948\u5e74",
            "1949\u5e74",
            "1950\u5e74",
            "1951\u5e74",
            "1952\u5e74",
            "1953\u5e74",
            "1954\u5e74",
            "1955\u5e74",
            "1956\u5e74",
            "1957\u5e74",
            "1958\u5e74",
            "1959\u5e74",
            "1960\u5e74",
            "1961\u5e74",
            "1962\u5e74",
            "1963\u5e74",
            "1964\u5e74",
            "1965\u5e74",
            "1966\u5e74",
            "1967\u5e74",
            "1968\u5e74",
            "1969\u5e74",
            "1970\u5e74",
            "1971\u5e74",
            "1972\u5e74",
            "1973\u5e74",
            "1974\u5e74",
            "1975\u5e74",
            "1976\u5e74",
            "1977\u5e74",
            "1978\u5e74",
            "1979\u5e74",
            "1980\u5e74",
            "1981\u5e74",
            "1982\u5e74",
            "1983\u5e74",
            "1984\u5e74",
            "1985\u5e74",
            "1986\u5e74",
            "1987\u5e74",
            "1988\u5e74",
            "1989\u5e74",
            "1990\u5e74",
            "1991\u5e74",
            "1992\u5e74",
            "1993\u5e74",
            "1994\u5e74",
            "1995\u5e74",
            "1996\u5e74",
            "1997\u5e74",
            "1998\u5e74",
            "1999\u5e74",
            "2000\u5e74",
            "2001\u5e74",
            "2002\u5e74",
            "2003\u5e74",
            "2004\u5e74",
            "2005\u5e74",
            "2006\u5e74",
            "2007\u5e74",
            "2008\u5e74",
            "2009\u5e74",
            "2010\u5e74",
            "2011\u5e74",
            "2012\u5e74",
            "2013\u5e74",
            "2014\u5e74",
            "2015\u5e74",
            "2016\u5e74",
            "2017\u5e74",
            "2018\u5e74",
            "2019\u5e74"
        ]
    }
],
"yAxis": [
    {
        "type": "value",
        "name": "\u7535\u5f71\u9662\u603b\u6570\uff08\u5bb6\uff09",
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "inverse": false,
        "offset": 0,
        "splitNumber": 5,
        "max": 340,
        "minInterval": 0,
        "splitLine": {
            "show": false,
            "lineStyle": {
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            }
        }
    },
    {
        "type": "value",
        "name": "\u6bcf\u5e74\u65b0\u589e\u7535\u5f71\u9662\u6570\uff08\u5bb6\uff09",
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "axisTick": {
            "show": true,
            "alignWithLabel": false,
            "inside": false
        },
        "inverse": false,
        "offset": 0,
        "splitNumber": 5,
        "max": 60,
        "minInterval": 0,
        "splitLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            }
        }
    }
],
"title": [
    {
        "text": "1928-2019\u5e74\u4e0a\u6d77\u5e02\u7535\u5f71\u9662\u6570\u91cf\u53d8\u5316\u8d8b\u52bf",
        "left": "center",
        "top": "top",
        "padding": 5,
        "itemGap": 10
    }
],
"dataZoom": [
    {
        "show": true,
        "type": "slider",
        "realtime": true,
        "start": 0,
        "end": 100,
        "orient": "horizontal",
        "zoomLock": false
    },
    {
        "show": true,
        "type": "inside",
        "realtime": true,
        "start": 0,
        "end": 100,
        "orient": "horizontal",
        "zoomLock": false
    }
]
};
    chart_chart5.setOption(option_chart5);

}