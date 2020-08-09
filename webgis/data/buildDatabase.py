import sqlite3

# 参数
databaseName = 'cinema.db'


def postProcess(record):
    record['x'] = float(record['x'])
    record['y'] = float(record['y'])
    if record['price'] == '人均:-':
        record['price'] = -1
    elif record['price'][:2] == '人均':
        tmp = record['price'][3:]
        record['price'] = tmp[:-1]  # 去掉【元】
    else:  # 根本没有记录
        record['price'] = -1
    if record['halls'] == "":
        record['halls'] = -1
    else:
        record['halls'] = int(record['halls'])
    if record['seats'] == "":
        record['seats'] = -1
    else:
        record['seats'] = int(record['seats'])
    for i in ['score1', 'score2', 'score3']:
        if record[i] == '':
            record[i] = -1
        else:
            record[i] = record[i].split(':')[1]  # 取冒号后面的
    booltypes = ['glasses', 'credit', 'ticketMachine', 'wifi',
                 'park', 'disable', 'food', 'recreation']
    for i in booltypes:
        if record[i] == '':
            record[i] = -1
        elif record[i] == 'FALSE':
            record[i] = 0
        else:
            record[i] = 1
    # 其他空项全部替换为-1
    for key in record.keys():
        if record[key] == '':
            record[key] = '-1'


def process(title, _text):
    text = _text.split(',')
    result = {}
    for (i, t) in enumerate(title):
        result[t] = text[i]
    return result


def storeToDB(conn, title, record):
    bracket = ','.join(title)
    placeholder = '(' + '?,' * (len(title) - 1) + '?)'
    results = [record[i] for i in title]
    query = 'INSERT INTO cinema (' + bracket + ') VALUES ' + placeholder
    try:
        conn.execute(query, results)
        conn.commit()
    except Exception as e:
        conn.rollback()
        print('An exception happened.')
        print(e)


# 创建数据库和表格
def main():
    title = []
    contents = []
    with open('cinema.txt', encoding='gbk') as f:
        title = f.readline()[:-1]
        title = title.split(',')
        for i in f.readlines():
            r = process(title, i[:-1])  # 去掉回车
            postProcess(r)
            contents.append(r)

    conn = sqlite3.connect(databaseName)
    conn.execute('''CREATE TABLE cinema
        (name   TEXT    NOT NULL,
        x       REAL    NOT NULL,
        y       REAL    NOT NULL,
        adcode  INT     NOT NULL,
        adname  TEXT    NOT NULL,
        address TEXT,
        rank    TEXT,
        price   INT,
        score1  TEXT,
        score2  TEXT,
        score3  TEXT,
        halls   INT,
        seats   INT,
        hallType TEXT,
        glasses  INT,
        credit   INT,
        ticketMachine INT,
        wifi     INT,
        park     INT,
        disable  INT,
        food     INT,
        recreation INT);''')
    # 这里,score1~3 选择text而不是float的原因是：担心可能发生的浮点数误差
    # 比如说，存进去0.3，读取出来会变成0.29999997这样的情况
    print("Table created successfully")
    for i in contents:
        storeToDB(conn, title, i)
    conn.commit()
    conn.close()
    print("Process finished.")


if __name__ == '__main__':
    main()
