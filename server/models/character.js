const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Character = new Schema(
  {
    name: { type: String, required: true },
    stats: {
      health: { type: Number, default: 100 },
      attack: { type: Number, required: true },
      defense: { type: Number, required: true },
      evasion: { type: Number, required: true },
      speed: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("characters", Character);
