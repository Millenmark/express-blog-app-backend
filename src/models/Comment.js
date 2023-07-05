import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
  {
    title: { type: String, required: true },
    caption: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    body: { type: Object, required: true },
    photo: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "user" },
    tags: { type: [String] },
    categories: [{ type: Schema.Types.ObjectId, ref: "postCategory" }],
  },
  {
    timestamps: true,
  }
);

const Comment = model("comment", CommentSchema);

export default Comment;
