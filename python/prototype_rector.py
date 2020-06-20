
# coding: utf-8

# In[1]:


import sklearn as sk
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os
import pymorphy2
morph = pymorphy2.MorphAnalyzer()


# In[2]:


stopwords_df = pd.read_excel('stopw.xlsx')
stopwords = list(stopwords_df['token'])


# In[3]:


def clean(text):
    text = " ".join([x.strip() for x in text if x != "\n"]).lower()
    text = " ".join([x for x in text.split() if len(x) > 2 and x.isalpha() and (x not in stopwords)])
    
    return text


# In[4]:


texts = []
for file in os.listdir("data_2"):
    texts.append(clean(open(f"data_2/{file}", encoding="cp1251").readlines()))


# In[5]:


def name_pr(n_text):
    st = texts[n_text].find('личная подпись фамилия')
    fin = texts[n_text].find('рабочая дисциплины закреплена')
    name_prog = texts[n_text][st + 23:fin -  1]
    return(name_prog)


# In[7]:


names = []
for i in range(len(texts)):
               names.append(name_pr(i))


# In[8]:


def name_k(n_text):
    st = texts[n_text].find('закреплена кафедрой')
    fn =  texts[n_text].find('учебный план направление')
    return(texts[n_text][st + 20:fn-  1])


# In[9]:


names_k = []
for i in range(len(texts)):
    names_k.append(name_k(i))


# In[15]:


texts = []
for file in os.listdir("data_2"):
    new_t = clean(open(f"data_2/{file}", encoding="cp1251").readlines())
    words = [morph.parse(word)[0].normal_form for word in new_t.split()]
    texts.append(' '.join(words))
    
corpus = texts


# In[16]:


from sklearn.feature_extraction.text import TfidfVectorizer


# In[17]:


vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(corpus)
# print(vectorizer.get_feature_names())

print(X.shape)


# In[18]:


feature_array = np.array(vectorizer.get_feature_names())
tfidf_sorting = np.argsort(X.toarray()).flatten()[::-1]

n = 100
top_n = feature_array[tfidf_sorting][:n]


# In[19]:


texts = []
for file in os.listdir("data_2"):
    new_t = clean(open(f"data_2/{file}", encoding="cp1251").readlines())
    words = [morph.parse(word)[0].normal_form for word in new_t.split()]
    texts.append(' '.join(words))
    
corpus = texts


# In[20]:


vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(corpus)
# print(vectorizer.get_feature_names())

print(X.shape)


# In[21]:


n = 5

top_n = []
for i in range(X.shape[0]):
    feature_array = np.array(vectorizer.get_feature_names())
    tfidf_sorting = np.argsort(X.toarray()[i]).flatten()[::-1]

    top_n.append(feature_array[tfidf_sorting][:n])


# In[22]:


true_top = pd.DataFrame(top_n)
true_top


# In[23]:


names[0] = 'web программирование'
true_top.index = names 
true_top.index.name = 'Образовательная программа'


# In[24]:


true_top


# In[25]:


from pytrends.request import TrendReq


# In[26]:


pytrends = TrendReq()
kw_list = list(true_top.iloc[7])[:5]
pytrends.build_payload(kw_list)
interest_over_time_df = pytrends.interest_over_time()
interest_over_time_df.tail()


# In[27]:


interest_over_time_df.plot()
plt.savefig('05_01.png', bbox_inches='tight')


# In[456]:


interest_over_time_df.mean(axis = 1)


# In[457]:


interest_over_time_df.mean(axis = 1).mean()


# In[458]:


res = []
for i in range(len(true_top)):
    pytrends = TrendReq()
    kw_list = list(true_top.iloc[i])[:5]
    pytrends.build_payload(kw_list)
    interest_over_time_df = pytrends.interest_over_time()
    res.append(round(interest_over_time_df.mean(axis = 1).mean(), 1))


# In[459]:


true_top['актуальность'] = res
true_top


# In[460]:


true_top.sort_values(['актуальность'], inplace = True)


# In[461]:


true_top.plot(kind = 'barh', figsize=(7, 10))
plt.grid()


# In[462]:


writer = pd.ExcelWriter('result_10.xlsx')
true_top.to_excel(writer, engine='xlsxwriter')  
writer.save()

