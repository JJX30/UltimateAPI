const mongoose = require("mongoose");

const FighterSchema = mongoose.Schema({
  info: {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    nickname: {
      type: String,
    },
  },
  stats: {
    height: {
      type: String,
    },
    weight: {
      type: String,
    },
    reach: {
      type: String,
    },
    stance: {
      type: String,
    },
  },
  career: {
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
  },
});

module.exports = mongoose.model("Fighters", FighterSchema);
