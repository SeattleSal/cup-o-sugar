const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const postSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, default: "give" }, // Give, Ask
  status: { type: String, required: true, default: "open" }, // open, pending, close
  description: { type: String, required: true },
  picture: { type: String }, // use url for now, change if upload pics
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true } // connect to the User
  // responses: [] // array of response types
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
