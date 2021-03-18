const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const responseSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  chosen: {type: Boolean, default: false}, 
  post: {type: String, required: true}
  // post: [] // post associated with response
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
