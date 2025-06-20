import Roadmap from "./../models/roadmapSchema.js";
export const getAllRoadmaps = async (req, res) => {
  try {
    const { category, status, sortBy } = req.query;
    const userId = req.user._id;

    const filter = {};
    if (category) {
      filter.category = category;
    }
    if (status) {
      filter.status = status;
    }

    let sortedRoadmaps;

    if (sortBy === "popularity") {
      sortedRoadmaps = await Roadmap.find(filter)
        .sort({ upvotes: -1 }).lean();
    } else {
      sortedRoadmaps = await Roadmap.find(filter)
        .sort({ createdAt: -1 }).lean();
    }

    const roadmaps = await sortedRoadmaps;

    const roadmapsWithUserInfo = roadmaps.map((roadmap) => {
      const upvotesCount = roadmap.upvotes.length;
      const isUpVoted = roadmap.upvotes.some((upvote) => upvote.toString() === userId.toString());
      return {
        ...roadmap,
        upvotesCount,
        isUpVoted,
      };
    });
    return res.status(200).json(roadmapsWithUserInfo);
  } catch (error) {
    console.error("Error to get all roadmaps: ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getRoadmapById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const roadmap = await Roadmap.findById(id).lean();
    if (!roadmap) {
      return res.status(404).json({ message: "Roadmap not found" });
    }
    const isUpVoted = roadmap.upvotes.some((upvote) => upvote === userId.toString());
    const upvotesCount = roadmap.upvotes.length;
    return res.status(200).json({
      ...roadmap,
      isUpVoted,
      upvotesCount,
    });
  } catch (error) {
    console.error("Error to get roadmap by ID: ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const upvoteRoadmap = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const roadmap = await Roadmap.findById(id);
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

    return res.status(200).json({
      message: "Roadmap upvoted successfully",
      roadmapId: roadmap._id,
      upvotesCount: roadmap.upvotes.length,
      isUpVoted: roadmap.upvotes.includes(userId)
    });
  } catch (error) {
    console.error("Error to upvote roadmap: ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addRoadmap = async (req, res) => {
  try {
    const { title, description, category, status } = req.body;
    const roadmap = new Roadmap({
      title,
      description,
      category,
      status,
      upvotes: [],
    });
    await roadmap.save();
    return res.status(201).json({ message: "Roadmap added successfully", roadmap });
  } catch (error) {
    console.error("Error to add roadmap: ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}
