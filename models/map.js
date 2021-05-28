const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema({
  features: { type: Array },
  id: { type: String },
  reviews: { type: Array },
});

const Map = mongoose.model("Map", mapSchema);

module.exports = Map;
