const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
  apiKey: String,
  registrationDate: String,
});

module.exports = mongoose.model("User", UserSchema);
