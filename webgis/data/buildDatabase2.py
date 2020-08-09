import sqlite3
import os

# 参数
databaseName = 'shopping.db'


def postProcess(record):
    record['x'] = float(record['x'])
    record['y'] = float(record['y'])
    if record['address'] == '-1':
        record['address'] = '暂无地址'


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
    query = 'INSERT INTO shopping (' + bracket + ') VALUES ' + placeholder
    try:
        conn.execute(query, results)
        conn.commit()
    except Exception as e:
        conn.rollback()
        conn.close()
        print('An exception happened.')
        print(e)
        os.remove(databaseName)
        raise Exception("Program termiantes.")


# 创建数据库和表格
def main():
    title = []
    contents = []
    with open('shopping.txt', encoding='utf-8') as f:
        title = f.readline().strip()
        title = title.split(',')
        for i in f.readlines():
            r = process(title, i.strip())  # 去掉回车
            postProcess(r)
            contents.append(r)

    conn = sqlite3.connect(databaseName)
    conn.execute('''CREATE TABLE shopping
        (id     TEXT    NOT NULL,
        name    TEXT    NOT NULL,
        x       REAL    NOT NULL,
        y       REAL    NOT NULL,
        adcode  INT     NOT NULL,
        adname  TEXT    NOT NULL,
        address TEXT    NOT NULL);''')
    print("Table created successfully")
    for i in contents:
        storeToDB(conn, title, i)
    conn.commit()
    conn.close()
    print("Process finished.")


if __name__ == '__main__':
    main()
