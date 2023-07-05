import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const PostCategorySchema = new Schema(
  {
    title: { type: String, required: true },
    caption: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    body: { type: Object, required: true },
    photo: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    tags: { type: [String] },
    categories: [{ type: Schema.Types.ObjectId, ref: "PostCategories" }],
  },
  {
    timestamps: true,
  }
);

const PostCategory = model("post", PostCategorySchema);

export default PostCategory;
