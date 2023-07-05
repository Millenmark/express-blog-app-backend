import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user", required: true },
    description: { type: String, required: true },
    postId: { type: Schema.Types.ObjectId, ref: "post" },
    check: { type: Boolean, default: false },
    parent: {
      type: Schema.Types.ObjectId,
      ref: "comment",
      default: null,
    },
    replyOnUser: { type: Schema.Types.ObjectId, ref: "user", default: null },
  },
  {
    timestamps: true,
  }
);

CommentSchema.virtual("replies", {
  ref: "comment",
  localField: "_id",
  foreignField: "parent",
});

const Comment = model("comment", CommentSchema);

export default Comment;
