# i-note-book-backend 

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

### `db.<<collections_name>>.insert({'name':'Avijit Samanta','age':'22','lang':'NodeJS'})`

### Insert multiple rows

### `db.<<collections_name>>.insertMany([{'name':'Avijit Samanta','age':'22','lang':'NodeJS'},{'name':'Antik Mondal','age':'23','lang':'JavaScript'},{'name':'Nirmal Pari','age':'23','lang':'JAVA'}])`
### View all rows

### `db.<<collections_name>>.find()                                                       OR                                                                                      db.<<collections_name>>.find().pretty()`