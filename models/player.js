const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new player({
  userName: {type: String, value: " "},
  alive: { default: true },
  livesLeft: {type: Number, value: 5},
  bat: { default: false },
  ether: { default: false },
  poison: {default: false}
});

const player = mongoose.model("player", playerSchema);

module.exports = playerSchema;
