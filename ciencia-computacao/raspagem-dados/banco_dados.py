from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
# book representa um dado obtido na raspagem
book = {
    "title": "Zé ruela",
}
document_id = db.books.insert_one(book).inserted_id
print(document_id)
client.close()


client = MongoClient()
db = client.catalogue
documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]
db.books.insert_many(documents)
client.close()

client = MongoClient()
db = client.catalogue
# busca um documento da coleção, sem filtros
print(db.books.find_one())
for book in db.books.find({"title": {"$regex": "t"}}):
    print(book["title"])
client.close()


with MongoClient() as client:
    db = client.catalogue
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])
