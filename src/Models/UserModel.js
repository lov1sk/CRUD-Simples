const mongoose = require("mongoose");
const { use } = require("../routes");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  name: String,
  age: Number,
  birth: Date,
  nacionality: String,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
