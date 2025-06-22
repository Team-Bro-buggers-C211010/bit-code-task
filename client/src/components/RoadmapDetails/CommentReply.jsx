import { useSelector } from "react-redux";

const CommentReply = ({ setIsReplying ,comment }) => {
    const { user } = useSelector(state => state.auth);
    return (
        <div className={`ml-${(comment.nestedDepth + 1) * 4} flex gap-3 items-start mt-2`}>
            <div className="flex justify-center items-center bg-amber-100 border-2 border-amber-400 font-medium w-10 h-10 rounded-full">
                {user?.userName?.charAt(0).toUpperCase() +
                    user?.userName?.charAt(1).toUpperCase()}
            </div>
            <textarea
                rows="2"
                placeholder="Add a reply..."
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            ></textarea>
            <div className="flex flex-col gap-2">
                <button
                    className=" bg-amber-400 text-white px-2 py-2 rounded-md text-sm hover:bg-amber-500 cursor-pointer transition duration-200"
                >
                    post
                </button>
                <p
                    className="text-sm text-gray-600 hover:underline cursor-pointer"
                    onClick={() => setIsReplying(false)}
                >
                    Cancel
                </p>
            </div>
        </div>
    )
}

export default CommentReply