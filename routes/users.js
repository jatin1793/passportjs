const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb+srv://jatin-wakodikar:Jatin@4196@mera-cluster.karqf3f.mongodb.net/?retryWrites=true&w=majority");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  name: String,
})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
