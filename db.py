import pymongo
uri = "mongodb://6d0d9a0d-0ee0-4-231-b9ee:DFKoNQdEIptsjmR5eAQlJO64FlQryGYipb4BTeb4CXh4uKI6OBCU93c6kaLM2AP2IGSgrRkAkcc91J1nK1QwUA==@6d0d9a0d-0ee0-4-231-b9ee.documents.azure.com:10255/?ssl=true&replicaSet=globaldb"
myclient = pymongo.MongoClient(uri)
#myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["vscribe"]
mycol = mydb["qna"]
# mydict = { "qno" : "2", "question" : "Explain Solar energy in points ? ", "answer" : "", "option1" : "True", "option2" : "False" }
# x = mycol.insert_one(mydict)

myquery = { "qno": "1" }

myquery = { "qno": "1" }
newvalues = { "$set": { "answer": "" } }
mycol.update_one(myquery, newvalues)

myquery = { "qno": "2" }
newvalues = { "$set": { "answer": "" } }
mycol.update_one(myquery, newvalues)

myquery = { "qno": "3" }
newvalues = { "$set": { "answer": "" } }
mycol.update_one(myquery, newvalues)
