"""
Routes and views for the flask application.
"""

from flask import render_template, request
import sqlite3 as sql
from webgis import app
import json
import math
import random
# 预测模块
import webgis.suggestion

# 封面
@app.route('/')
def cover():
    return render_template('cover.html')

# 主页和icon
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('img/favicon.ico')

# 四大版块
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/recommend')
def recommend():
    return render_template('recommend.html')

@app.route('/analysis', methods=['POST'])
def analysis():
    if request.method == 'POST':
        getter = request.form
    elif request.method == 'GET':
        getter = request.args
    
    requestParas = ['gender','adname','age','num','transport',
    'entertainment01','entertainment02','entertainment03','entertainment04',
    'entertainment05','entertainment06','entertainment07','entertainment08',
    'entertainment09','entertainment10','entertainment11','entertainment12',
    'entertainment13','entertainment14','entertainment15','entertainment16',
    'tag01','tag02','tag03','tag04','tag05','tag06',
    'tag07','tag08','tag09','tag10','tag11','tag12']
    inputList = []
    # 储存用户所在地
    user_location = ''
    for i in requestParas:
        para = getter.get(i)
        # 选项空与非空
        if para is not None and para != '':
            if para.isdigit():
                inputList.append(int(para))
            else:
                user_location = para # 预测时需要取出所在地
        else:
            inputList.append(0)
    # 检测格式用
    # print(inputList)
    # print(user_location)

    # 检测list里有哪些是空选项
    # 空选项index列表
    blank_index = []
    for (index, i) in enumerate(inputList):
        if i == 0:
            blank_index.append(index)
    flag = True
    if 0 in blank_index or 1 in blank_index or 2 in blank_index or 3 in blank_index:
        flag = False

    # 在python里添加判断，用两个返回区分选项
    if flag is False:
        result = json.dumps({'success': False, 'error': '请输入完整的个人信息！'})
    else:
        # 储存用户出行方式
        user_trans = ''
        # 记录出行方式
        i = inputList[3]
        if i == 1 or i == 2:
            user_trans = 'driving'
        elif i == 3 or i == 4:
            user_trans = 'transfer'
        elif i == 5 or i == 6 or i == 7:
            user_trans = 'riding'
        elif i == 8:
            user_trans = 'walking'
        # print(user_trans)

        # 调用函数，得到预测结果
        outputDict = webgis.suggestion.suggestion_function(inputList)
        pieList = [list(outputDict.keys()), list(outputDict.values())]
        # print(outputDict)
        # print(outputList)

        # 制造词云list-dict
        wordcloudList = []
        # 先选出数据库中对应个数的place，构成dict
        placeDict = {}
        placeDict['exhibition'] = 0
        placeDict['spot'] = 0
        for name, value in outputDict.items():
            if name == '电影院':
                placeDict['cinema'] = math.floor(value*100)
            elif name == 'KTV':
                placeDict['ktv'] = math.floor(value*100)
            elif '馆' in name:
                placeDict['exhibition'] += math.floor(value*100)
            elif '景点' in name:
                placeDict['spot'] += math.floor(value*100)
            elif name == '商场':
                placeDict['shopping'] = math.floor(value*100)
            elif name == '公园':
                placeDict['park'] = math.floor(value*100)
        # print(placeDict)
        # 用dict作为参考选出db里对应数目的place name
        for place, value in placeDict.items():
            database = place + '.db'
            # 每次循环创建新的地点列表
            pointList = []
            with sql.connect(database) as conn:
                cur = conn.cursor()
                cur.execute('SELECT name FROM ' + place + " WHERE adname LIKE '" + user_location + "'")
                tmp = [row for row in cur]
                if len(tmp) < value:
                    pointList += tmp
                else:
                    pointList += random.sample(tmp, value)
            # 对每个地点列表创建dict
            for i in pointList:
                wordcloudDict = {}
                wordcloudDict['name'] = i
                wordcloudDict['value'] = random.randint(1,value)
                wordcloudList.append(wordcloudDict)
        # 推荐两个地点
        recommendList = []
        # 中间临时列表
        recommendPlace = pieList[0][0]
        # print(recommendPlace)
        if recommendPlace == '电影院':
            table = 'cinema'
        elif recommendPlace == 'KTV':
            table = 'ktv'
        elif '馆' in recommendPlace:
            table = 'exhibition'
        elif '景点' in recommendPlace:
            table = 'spot'
        elif recommendPlace == '商场':
            table = 'shopping'
        elif recommendPlace == '公园':
            table = 'park'
        database = table + '.db'
        with sql.connect(database) as conn:
            cur = conn.cursor()
            if table == 'cinema':
                captions = ['name', 'x', 'y', 'adcode', 'adname', 'address',
                        'rank', 'price', 'score1', 'score2', 'score3', 'halls',
                        'seats', 'hallType', 'glasses', 'credit',
                        'ticketMachine', 'wifi', 'park', 'disable',
                        'food', 'recreation']
                cur.execute(f'SELECT * FROM cinema WHERE adname LIKE "{user_location}" AND rank!=-1 AND halls!=-1 AND seats!=-1')
                tmp = [row for row in cur]
                points = random.sample(tmp, 2)
                for point in points:
                    recommendDict = {}
                    for (key, value) in zip(captions, point):
                        recommendDict[key] = value
                    recommendList.append(recommendDict)
            else:
                cur.execute('SELECT name, address, x, y FROM ' + table + " WHERE adname LIKE '" + user_location + "'")
                tmp = [row for row in cur]
                points = random.sample(tmp, 2)
                for point in points:
                    recommendDict = {}
                    recommendDict['name'] = point[0]
                    recommendDict['address'] = point[1]
                    recommendDict['x'] = point[2]
                    recommendDict['y'] = point[3]
                    recommendList.append(recommendDict)
        print(recommendList)


        # 塞入返回的json
        result = json.dumps({'success': True, 'piechart': pieList, 'location': user_location, 'wordcloud': wordcloudList, 'recommend': recommendList, 'transport': user_trans})
        # print(result)

    return result
