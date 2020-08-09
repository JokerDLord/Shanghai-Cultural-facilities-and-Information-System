import os
import pandas as pd
import numpy as np
import math,random
from sklearn.preprocessing import OneHotEncoder,LabelEncoder
from sklearn.compose import ColumnTransformer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split, GridSearchCV



def data_init():#原始数据独热编码以及区分训练和测试样本
    general = pd.read_excel('./webgis/searchtable.xlsx')
    df = general
    rank_df=df.iloc[:,0:31]

    y=df.iloc[:,32:46]
    X_train,X_test,y_train,y_test=train_test_split(rank_df.values,y.values,test_size=0.05)

    ohe = ColumnTransformer([('transport',OneHotEncoder(),[3])],remainder='passthrough')
    X_train_ohe = ohe.fit_transform(X_train)
    labelencoder_X=LabelEncoder()
    X_train_ohe[:,0]=labelencoder_X.fit_transform(X_train_ohe[:,0])
    return X_train_ohe,y_train,X_test,y_test,ohe ,labelencoder_X

    

def give_proba(X_test,X_train_ohe,y_trains):#输入独热编码后的预测
    #X_train_ohe,y_trains =data_init()[0:2]
    place=['电影院','公园','KTV','博物馆','天文馆','美术馆',\
    '水族馆','纪念馆','展览馆','图书馆','科技馆','商场',\
    '人文旅游景点','自然旅游景点']
    probas=[]
    for i in range(y_trains.shape[1]):
        y_train=y_trains[:,i]
        if np.all(y_train==0):
            proba0=0.9+random.random()*0.1
            probas.append([proba0,1-proba0])
            continue
        lr = LogisticRegression(random_state=0, solver='liblinear')
        lr.fit(X_train_ohe,y_train)
        proba=lr.predict_proba(X_test)[0]
        probas.append(proba[1])

    sorted_proba=list(zip(place,probas))
    sorted_proba.sort(key=lambda a:a[-1],reverse=True)
    words='推荐度指数'
    return sorted_proba


def predict_direction(df_import):#输入将tag和entertainment转换后的数据，返回预测结果
    X_train_ohe,y_train,X_test,y_test,ohe,labelencoder_X= data_init()[0:6]
    shape=df_import.shape[0]
    user_data = ohe.transform(df_import.reshape(1,shape))
    user_data[:,0]=labelencoder_X.fit_transform(user_data[:,0])
    return give_proba(user_data,X_train_ohe,y_train)
 
    
def list2dir(lst1):#将预测列表转为字典
    direc={}
    for ele in lst1:
        direc[ele[0]]=ele[1]
    return direc

def suggestion_function(actual_user_data):
    # 之前的输入样本是从excel中选出来的
    # X_test,y_test = data_init()[2:4]
    # test = X_test[0,:]
    # 注意输入数据格式
    test = np.array(actual_user_data)
    # print(test)
    pl = ['电影院','公园','KTV','博物馆','天文馆','美术馆',\
    '水族馆','纪念馆','展览馆','图书馆','科技馆','商场',\
    '人文旅游景点','自然旅游景点']
    # print('y_test')
    # print(y_test[0])
    predict_lst = predict_direction(test) #预测结果
    # print(predict_lst)
    return list2dir(predict_lst)
    
