import { AiOutlineLike } from "react-icons/ai";
const RoadmapCard = ({ roadmap }) => {
    console.log(roadmap)
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-3">
                <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-medium">
                    {roadmap.category}
                </span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-semibold">
                    {roadmap.status}
                </span>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {roadmap.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4">
                {roadmap.description.length > 100 ? `${roadmap.description.slice(0, 100)}...` : roadmap.description}
            </p>

            <div className="flex justify-between items-center">
                <p className="flex items-center gap-2 text-sm px-3 py-1.5 border border-yellow-400 text-yellow-500 rounded">
                    <button><AiOutlineLike className="text-neutral-950 hover:text-yellow-400 hover:font-semibold text-lg cursor-pointer transition-colors duration-200" /></button>{roadmap.upvotesCount}
                </p>
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                    View Details
                </span>
            </div>
        </div>
    )
}

export default RoadmapCard