const connectToMongo = require("./config/db");
const express = require('express')

const app = express()
const port = 3000

connectToMongo();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
