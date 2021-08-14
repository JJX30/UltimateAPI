const mongoose = require("mongoose");

const FighterSchema = mongoose.Schema({
  info: {
    firstname: {
      required: true,
      type: String,
    },
    lastname: {
      required: true,
      type: String,
    },
    nickname: {
      required: false,
      type: String,
    },
  },
  stats: {
    height: {
      required: true,
      type: String,
    },
    weight: {
      required: true,
      type: String,
    },
    reach: {
      required: true,
      type: String,
    },
    stance: {
      required: true,
      type: String,
    },
  },
  career: {
    wins: {
      required: true,
      type: Number,
    },
    losses: {
      required: true,
      type: Number,
    },
    draws: {
      required: true,
      type: Number,
    },
    belt: {
      required: true,
      type: Boolean,
    },
  },
});

module.exports = mongoose.model("Fighters", FighterSchema);
