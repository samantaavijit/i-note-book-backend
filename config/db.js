const mongoose = require("mongoose");
const databaseName = "inotebook";
const mongoURI = `mongodb://localhost:27017/${databaseName}?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongoose");
  });
};

module.exports = connectToMongo;
