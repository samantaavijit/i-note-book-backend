const connectToMongo = require("./config/db");
const express = require("express");
var cors = require('cors')

const app = express();
app.use(cors())
const port = 5000;

connectToMongo();

app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`iNoteBook app listening at http://localhost:${port}`);
});
