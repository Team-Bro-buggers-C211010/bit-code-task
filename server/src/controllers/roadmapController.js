import Roadmap from "./../models/roadmapSchema.js";
export const getAllRoadmaps = async (req, res) => {
  try {
    const { category, status, sortBy } = req.query;

    const filter = {};
    if (category) {
      filter.category = category;
    }
    if (status) {
      filter.status = status;
    }

    if (sortBy === "popularity") {
      const sortedRoadmaps = await Roadmap.find(filter).sort({ upvotes: -1 });
      return res.status(200).json(sortedRoadmaps);
    } else {
      const sortedRoadmaps = await Roadmap.find(filter).sort({ createdAt: -1 });
      return res.status(200).json(sortedRoadmaps);
    }
  } catch (error) {
    console.error("Error to get all roadmaps: ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getRoadmapById = async (req, res) => {
  const { id } = req.params;
  try {
    const roadmap = await Roadmap.findById(id);
    if (!roadmap) {
      return res.status(404).json({ message: "Roadmap not found" });
    }
    return res.status(200).json(roadmap);
  } catch (error) {
    console.error("Error to get roadmap by ID: ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const upvoteRoadmap = async (req, res) => {
  const { id } = req.params;
  try {
    const roadmap = await Roadmap.findById(id);
    const userId = req.user._id;
    if (!roadmap) {
      return res.status(404).json({ message: "Roadmap not found" });
    }
    if (roadmap.upvotes.includes(userId)) {
      return res
        .status(400)
        .json({ message: "You have already upvoted this roadmap" });
    }
    roadmap.upvotes.push(userId);
    await roadmap.save();

    return res
      .status(200)
      .json({
        message: "Roadmap upvoted successfully",
        upvotes: roadmap.upvotes,
      });
  } catch (error) {
    console.error("Error to upvote roadmap: ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
