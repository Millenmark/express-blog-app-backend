import { Schema, model } from "mongoose";

const PostCategorySchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const PostCategory = model("postCategory", PostCategorySchema);

export default PostCategory;
