import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRoadmapById, upvoteRoadmap } from "../features/Roadmaps/roadmapThunk";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import Comment from "../components/RoadmapDetails/Comment";
import { getAllComments } from "../features/Comment/commentThunk";
import { useMemo } from "react";


const RoadmapDetail = () => {
  const { selectedRoadmap } = useSelector(state => state.roadmap);
  const { user } = useSelector(state => state.auth);
  const { comments } = useSelector(state => state.comment);
  const { roadmapId } = useParams();
  const dispatch = useDispatch();
  const handleUpvote = () => {
    dispatch(upvoteRoadmap(selectedRoadmap._id));
  }

  useEffect(() => {
    dispatch(getRoadmapById(roadmapId));
    dispatch(getAllComments(roadmapId));
  }, [dispatch, roadmapId]);

  // Build nested comment structure
  const commentTree = useMemo(() => {
    if (!comments) return [];

    const map = {};
    const roots = [];

    // Create map of all comments
    comments.forEach(comment => {
      map[comment._id] = { ...comment, replies: [] };
    });
    console.log(map)
    // Build nesting structure
    comments.forEach(comment => {
      if (comment.parentComment) {
        const parentComment = map[comment.parentComment];
        if (parentComment) {
          parentComment.replies.push(map[comment._id]);
        }
      } else {
        roots.push(map[comment._id]);
      }
    });

    return roots;
  }, [comments]);

  console.log(commentTree)

  return (
    <div className="max-w-4xl mx-2 md:mx-auto p-6 bg-white shadow rounded-md mt-10">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-amber-100 text-amber-700 text-sm px-3 py-1 font-medium">
            {selectedRoadmap?.category}
          </span>
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 font-semibold">
            {selectedRoadmap?.status}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{selectedRoadmap?.title}</h1>
        <p className="text-gray-700 leading-relaxed text-base">
          {selectedRoadmap?.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <p className="flex items-center gap-2 text-sm px-3 py-1.5 border border-amber-400 text-amber-500 rounded">
            {
              selectedRoadmap?.isUpVoted ? <button disabled><AiFillLike className="text-amber-400 font-semibold text-lg cursor-not-allowed transition-colors duration-200" /></button> : <button onClick={handleUpvote}><AiOutlineLike className="text-neutral-950 hover:text-amber-400 hover:font-semibold text-lg cursor-pointer transition-colors duration-200" /></button>
            }
            {selectedRoadmap?.upvotesCount}
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-6" />

      {/* Comments Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-slate-800">Comments</h2>
        <p className="text-sm text-gray-500">Join the discussion and share your thoughts</p>
      </div>

      <div className="flex gap-3 items-start mb-6">
        <div className="flex justify-center items-center bg-amber-100 border-2 border-amber-400 font-medium w-10 h-10 rounded-full object-cover">
          {user?.userName?.charAt(0).toUpperCase() + user?.userName?.charAt(1).toUpperCase()}
        </div>
        <textarea
          rows="3"
          placeholder="Add a comment..."
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
        ></textarea>
        <button className="bg-amber-400 text-white px-4 py-2 rounded-md text-sm hover:bg-amber-500 transition duration-200">
          Post
        </button>
      </div>

      <div className="space-y-6">
        {
          commentTree?.map(comment => <Comment key={comment._id} comment={comment} />)
        }
      </div>
    </div>

  )
}

export default RoadmapDetail