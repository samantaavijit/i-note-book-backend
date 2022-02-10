# i-note-book-backend mongoDB cheatsheet

I Note Book backend app

## MongoDb commands for DATABASES

### Create a new or switch database

### `use <<db_name>>`

### View all databases

### `show dbs`

### View current database

### `db`

### Delete database

### `db.dropDatabase()`

## MongoDb commands for COLLECTIONS

### Create a new collections

### `db.createCollection('<<collections_name>>')`

### View all collections

### `show collections`

### Delete collections

### `db.<<collections_name>>.drop()`

## MongoDb commands for ROWS

### Insert one row

### `db.<<collections_name>>.insert({'<<key>>':'<<value>>','<<key>>':'<<value>>','<<key>>':'<<value>>'})`

### Insert multiple rows

### `db.<<collections_name>>.insertMany([{'<<key>>':'<<value>>','<<key>>':'<<value>>','<<key>>':'<<value>>'},{'<<key>>':'<<value>>','<<key>>':'<<value>>','<<key>>':'<<value>>'},{'<<key>>':'<<value>>','<<key>>':'<<value>>','<<key>>':'<<value>>'}])`

### View all rows

### `db.<<collections_name>>.find()` <br/> OR <br/> `db.<<collections_name>>.find().pretty()`

### View first row

### `db.<<collections_name>>.findOne().pretty()`

### Search in a MongoDb Database

### `db.<<collections_name>>.find({<<key>>:'<<value>>'}).pretty()`

### Limit the number of rows in output

### `db.<<collections_name>>.find().pretty().limit(<<limit number>>)`

### View total number of results

### `db.<<collections_name>>.find().pretty().count()`

### Sort the documents

### `db.<<collections_name>>.find().sort({<<key>>:1 for ASC / -1 for DESC}).pretty()`

### Update a row

### `db.<<collections_name>>.update({<<key>>:<<value>>}for search query,{'<<key>>':'<<value>>','<<key>>':'<<value>>','<<key>>':'<<value>>'}for update value)`
