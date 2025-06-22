import Comment from "../models/commentSchema.js";

export const getAllComments = async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.find({ roadmap: id })
      .populate("user", "userName")
      .sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addComment = async (req, res) => {
  try {
    const userId = req.user?._id;
    const { message, roadmap, parentCommentId } = req.body;
    console.log(message, roadmap, userId, parentCommentId);

    if (!userId || !message || !roadmap) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const parentComment = parentCommentId
      ? await Comment.findById(parentCommentId)
      : null;
    const nestedDepth = parentComment ? parentComment.nestedDepth + 1 : 0;
    if (nestedDepth > 2) {
      return res.status(400).json({ message: "Nested depth limit exceeded" });
    }
    const newComment = new Comment({
      message,
      roadmap,
      user: userId,
      parentComment: parentCommentId,
      nestedDepth,
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    const checkIsParent = async (id) => {
      const comments = await Comment.find({ parentComment: id });
      for (const comment of comments) {
        await checkIsParent(comment._id);
      }
      await Comment.findByIdAndDelete(id);
    };
    checkIsParent(id);
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
