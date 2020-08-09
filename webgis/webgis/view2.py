"""
Routes and views for the flask application.
"""

from flask import render_template, request
import sqlite3 as sql
from webgis import app
import json


# 三个子版块
@app.route('/cinema')
def cinema_load():
    return render_template('cinema.html')

@app.route('/cinema-query', methods=['POST'])
def cinema_query():
    if request.method == 'POST':
        getter = request.form
    elif request.method == 'GET':
        getter = request.args

    # 按以下选项进行选择，是name
    requestParas = ['name', 'rank', 'lowPrice', 'highPrice', 'wifi', 'park',
                    'glasses', "rank5", "rank45", "rank4", "adname"]
    requestDist = {}
    for i in requestParas:
        para = getter.get(i)
        if para is not None and para != '':  # 过滤掉空的选项
            requestDist[i] = para
    queryString = c_getQueryStr(requestDist)  # 将query组建成字典
    print(queryString)
    result = []
    with sql.connect("cinema.db") as conn:  # 连接数据库，并查找
        try:
            cur = conn.cursor()
            cur.execute(queryString)
            tmpResult = [row for row in cur]
            captions = ['name', 'x', 'y', 'adcode', 'adname', 'address',
                        'rank', 'price', 'score1', 'score2', 'score3', 'halls',
                        'seats', 'hallType', 'glasses', 'credit',
                        'ticketMachine', 'wifi', 'park', 'disable',
                        'food', 'recreation']
            result = c_genJSON(captions, tmpResult)
        except Exception as e:
            result = json.dumps({'success': False, 'error': str(e)})
    return result

def c_getQueryStr(data):
    # 根据post的内容，组装SQL的查询语句
    sentence = []
    # 将选中星级变成列表，根据选中的不同组装语句
    ranklst = []
    rankdict = {"rank5": "五星商户", "rank45": "准五星商户", "rank4": "四星商户"}
    for field in data.keys():
        # if field == 'name':
        #     sentence.append(" name LIKE '%" + data['name'] + "%' ")
        if field == 'averagePrice':
            continue
        elif field == 'lowPrice':
            sentence.append(' price >= ' + data['lowPrice'] + ' ')
        elif field == 'highPrice':
            sentence.append(' price <= ' + data['highPrice'] + ' ')
            sentence.append(' price >= 0 ')
        elif field[:4] == 'rank':
            ranklst.append(field)
        elif field == "adname":
            sentence.append(' adname = ' + data['adname'] + ' ')
        else:
            sentence.append(' ' + field + ' = 1 ')
    # deal with rankings
    if len(ranklst) == 3:
        sentence.append(' (rank = "' + rankdict[ranklst[0]] + '" or rank = "' + rankdict[
                        ranklst[1]] + '" or rank = "' + rankdict[ranklst[2]] + '") ')
    elif len(ranklst) == 2:
        sentence.append(
            ' (rank = "' + rankdict[ranklst[0]] + '" or rank = "' + rankdict[ranklst[1]] + '") ')
    elif len(ranklst) == 1:
        sentence.append(' (rank = "' + rankdict[ranklst[0]] + '") ')

    if len(sentence) == 0:
        return "SELECT * FROM cinema"
    else:
        return "SELECT * FROM cinema WHERE " + " AND ".join(sentence)

def c_genJSON(caption, content):
    # 将返回的结果组装成JSON
    result = {"success": True}
    cinemas = []
    for row in content:
        cinema = {}
        for (i, name) in enumerate(caption):
            cinema[name] = row[i]
        cinemas.append(cinema)
    result['content'] = cinemas
    return json.dumps(result)


@app.route('/ktv')
def ktv_load():
    return render_template('ktv.html')

@app.route('/ktv-query', methods=['POST'])
def ktv_query():
    if request.method == 'POST':
        getter = request.form
    elif request.method == 'GET':
        getter = request.args

    # 按以下选项进行选择
    requestParas = ['name', 'rank', 'lowPrice', 'highPrice', "rank5", "rank45", "rank4", "adname"]
    requestDist = {}
    for i in requestParas:
        para = getter.get(i)
        if para is not None and para != '':  # 过滤掉空的选项
            requestDist[i] = para
    queryString = k_getQueryStr(requestDist)  # 将query组建成字典
    print(queryString)
    result = []
    with sql.connect("ktv.db") as conn:  # 连接数据库，并查找
        try:
            cur = conn.cursor()
            cur.execute(queryString)
            tmpResult = [row for row in cur]
            captions = ['id','name', 'x', 'y', 'adcode', 'adname', 'rank','reviews',
                        'price', 'score2', 'score1', 'score3','address']#注意stars改为rank
            result = k_genJSON(captions, tmpResult)
        except Exception as e:
            result = json.dumps({'success': False, 'error': str(e)})
    return result

def k_getQueryStr(data):
    # 根据post的内容，组装SQL的查询语句
    sentence = []
    # 将选中星级变成列表，根据选中的不同组装语句
    ranklst = []
    rankdict = {"rank5": "五星商户", "rank45": "准五星商户", "rank4": "四星商户"}
    for field in data.keys():
        # if field == 'name':
        #     sentence.append(" name LIKE '%" + data['name'] + "%' ")
        if field == 'averagePrice':
            continue
        elif field == 'lowPrice':
            sentence.append(' price >= ' + data['lowPrice'] + ' ')
        elif field == 'highPrice':
            sentence.append(' price <= ' + data['highPrice'] + ' ')
            sentence.append(' price >= 0 ')
        elif field[:4] == 'rank':
            ranklst.append(field)
        elif field == "adname":
            sentence.append(' adname = ' + data['adname'] + ' ')
        else:
            sentence.append(' ' + field + ' = 1 ')
    # deal with rankings
    if len(ranklst) == 3:
        sentence.append(' (rank = "' + rankdict[ranklst[0]] + '" or rank = "' + rankdict[
                        ranklst[1]] + '" or rank = "' + rankdict[ranklst[2]] + '") ')
    elif len(ranklst) == 2:
        sentence.append(
            ' (rank = "' + rankdict[ranklst[0]] + '" or rank = "' + rankdict[ranklst[1]] + '") ')
    elif len(ranklst) == 1:
        sentence.append(' (rank = "' + rankdict[ranklst[0]] + '") ')

    if len(sentence) == 0:
        return "SELECT * FROM ktv"
    else:
        return "SELECT * FROM ktv WHERE " + " AND ".join(sentence)

def k_genJSON(caption, content):
    # 将返回的结果组装成JSON
    result = {"success": True}
    ktvs = []
    for row in content:
        ktv = {}
        for (i, name) in enumerate(caption):
            ktv[name] = row[i]
        ktvs.append(ktv)
    result['content'] = ktvs
    return json.dumps(result)


@app.route('/exhibition')
def exhibition_load():
    return render_template('exhibition.html')

@app.route('/exhibition-query', methods=['POST'])
def exhibition_query():
    if request.method == 'POST':
        getter = request.form
    elif request.method == 'GET':
        getter = request.args

    print(getter)
    # 按以下选项进行选择
    requestParas = ['name', 'adname','展览馆','图书馆','天文馆','水族馆','美术馆','科技馆','纪念馆','博物馆']
    requestDist = {}
    for i in requestParas:
        para = getter.get(i)
        if para is not None and para != '':  # 过滤掉空的选项
            requestDist[i] = para
    queryString = e_getQueryStr(requestDist)  # 将query组建成字典
    print(queryString)
    result = []
    with sql.connect("exhibition.db") as conn:  # 连接数据库，并查找
        try:
            cur = conn.cursor()
            cur.execute(queryString)
            tmpResult = [row for row in cur]
            captions = ['id','name', 'x', 'y', 'adcode', 'adname', 'type', 'address']#注意stars改为rank
            result = e_genJSON(captions, tmpResult)
        except Exception as e:
            result = json.dumps({'success': False, 'error': str(e)})
    return result

def e_getQueryStr(data):
    # 根据post的内容，组装SQL的查询语句
    sentence = []
    # 将选中星级变成列表，根据选中的不同组装语句
    exhibitionlst = []
    exhibitiondict = ['展览馆','图书馆','天文馆','水族馆','美术馆','科技馆','纪念馆','博物馆']
    for field in data.keys():
        # if field == 'name':
        #     sentence.append(" name LIKE '%" + data['name'] + "%' ")
        if field in exhibitiondict:
            exhibitionlst.append(field)
        elif field == "adname":
            sentence.append(' adname = ' + data['adname'] + ' ')
    # deal with exhibitions
    if len(exhibitionlst)==0 and len(sentence) == 0:
        return "SELECT * FROM exhibition"
    elif len(exhibitionlst)==0:
        return "SELECT * FROM exhibition WHERE " + " AND ".join(sentence)

    typestrs='('
    for ind in range(len(exhibitionlst)-1): 
        typestrs+='type = "'+exhibitionlst[ind] +'" or '
    typestrs+='type = "'+exhibitionlst[len(exhibitionlst)-1] + '")'

    sentence.append(typestrs)
    return "SELECT * FROM exhibition WHERE " + " AND ".join(sentence)

def e_genJSON(caption, content):
    # 将返回的结果组装成JSON
    result = {"success": True}
    exhibitions = []
    for row in content:
        exhibition = {}
        for (i, name) in enumerate(caption):
            exhibition[name] = row[i]
        exhibitions.append(exhibition)
    result['content'] = exhibitions
    return json.dumps(result)
