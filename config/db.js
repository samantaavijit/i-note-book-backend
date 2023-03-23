const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("database is connected successfully");
});

connection.on("disconnected", () => {
  console.log("database is disconnected successfully");
});

connection.on("error", console.error.bind(console, "connection error:"));

module.exports = connection;
