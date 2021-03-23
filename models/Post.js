const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
const Response = require("./Response");

const postSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, default: "give" }, // Give, Ask
  status: { type: String, required: true, default: "open" }, // open, pending, close
  description: { type: String, required: true },
  image: { type: String }, // use url for now, change if upload pics
  cloudinary_id: { type: String},
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // connect to the User
  responses: [{ type: Schema.Types.ObjectId, ref: 'Response'}]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
