const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/testdb");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  name: String,
})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);