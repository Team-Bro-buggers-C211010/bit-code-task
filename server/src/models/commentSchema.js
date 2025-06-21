import { mongoose } from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    roadmap: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Roadmap",
      required: true,
    },
    parentComment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
    nestedDepth: {
      type: Number,
      default: 0,
      max: 2,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
