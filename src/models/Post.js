import { Schema, model } from "mongoose";

const PostSchema = new Schema(
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

PostSchema.virtual("comments", {
  ref: "comment",
  localField: "_id",
  foreignField: "postId",
});

const Post = model("post", PostSchema);

export default Post;
