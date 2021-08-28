const mongoose = require("mongoose");

function toLower(v) {
  v.toLowerCase();
}
const FighterSchema = mongoose.Schema({
  firstname: {
    type: String,
    // set: toLower,
  },
  lastname: {
    type: String,
    // set: toLower,
  },
  nickname: {
    type: String,
    //set: toLower,
  },

  height: {
    type: String,
    //set: toLower,
  },
  weight: {
    type: String,
    //set: toLower,
  },
  reach: {
    type: String,
    //set: toLower,
  },
  stance: {
    type: String,
    //set: toLower,
  },

  wins: {
    type: Number,
  },
  losses: {
    type: Number,
  },
  draws: {
    type: Number,
  },
  belt: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Fighter", FighterSchema);
