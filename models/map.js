const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema({
  features: { type: Array },
  id: { type: Number },
});

const Map = mongoose.model("Map", mapSchema);

module.exports = Map;
