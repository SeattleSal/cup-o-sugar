const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const neighborhoodSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  zipCode: { type: String, required: true },
});

const Neighborhood = mongoose.model("Neighborhood", neighborhoodSchema);

module.exports = Neighborhood;
