const mongoose = require("mongoose");

class StartDatabase {
  async startdb() {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/Crud");
      console.log("Conectado ao mongo db");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new StartDatabase();

/**/
