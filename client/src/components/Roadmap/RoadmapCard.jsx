import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { upvoteRoadmap } from "../../features/Roadmaps/roadmapThunk";
import { Link } from "react-router-dom";
const RoadmapCard = ({ roadmap }) => {
    const dispatch = useDispatch();
    const handleUpvote = () => {
        dispatch(upvoteRoadmap(roadmap._id));
    }
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-3">
                <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-medium">
                    {roadmap?.category}
                </span>
                <span className={`text-xs ${roadmap?.status === 'Completed' ? 'bg-green-100 text-green-700' : roadmap?.status === 'In Progress' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'} px-2 py-1 rounded font-semibold`}>
                    {roadmap?.status}
                </span>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {roadmap?.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4">
                {roadmap?.description?.length > 100 ? `${roadmap.description.slice(0, 100)}...` : roadmap.description}
            </p>

            <div className="flex justify-between items-center">
                <p className="flex items-center gap-2 text-sm px-3 py-1.5 border border-yellow-400 text-yellow-500 rounded">
                    {
                        roadmap?.isUpVoted ? <button disabled><AiFillLike className="text-yellow-400 font-semibold text-lg cursor-not-allowed transition-colors duration-200" /></button> : <button onClick={handleUpvote}><AiOutlineLike className="text-neutral-950 hover:text-yellow-400 hover:font-semibold text-lg cursor-pointer transition-colors duration-200" /></button>
                    }
                    {roadmap?.upvotesCount}
                </p>
                <Link to={`/${roadmap._id}/details`} className="text-sm text-blue-600 hover:underline cursor-pointer">
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default RoadmapCard