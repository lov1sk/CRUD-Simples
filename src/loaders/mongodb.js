const mongoose = require("mongoose");

async function startDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Crud");
    console.log("Conectado ao mongo db");
  } catch (error) {
    console.log(error);
  }
}

module.exports = startDb;
