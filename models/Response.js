const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const responseSchema = new Schema({
  owner: { type: String, required: true }, // connect to the User
  chosen: {type: Boolean, default: false}, 
  post: {type: String, required: true}
  // post: [] // post associated with response
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
