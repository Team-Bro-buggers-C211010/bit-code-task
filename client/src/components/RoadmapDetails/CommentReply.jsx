import { useSelector } from "react-redux";

const CommentReply = ({ onSubmit, handleSubmit, register, errors, setIsReplying, comment }) => {
    const { user } = useSelector(state => state.auth);
    return (
        <div className={`ml-${(comment.nestedDepth + 1) * 4} flex gap-3 items-start mt-2`}>
            <div className="flex justify-center items-center bg-amber-100 border-2 border-amber-400 font-medium w-10 h-10 rounded-full">
                {(user?.userName
                    ? (user.userName.charAt(0).toUpperCase() +
                        (user.userName.length > 1 ? user.userName.charAt(1).toUpperCase() : ""))
                    : "")}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex gap-2 w-full">
                    <textarea
                        rows="2"
                        placeholder="Add a reply..."
                        {...register("message", { required: "Message is required" })}
                        className={`w-full px-4 py-2 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded outline-none`}
                    ></textarea>
                    <div className="flex flex-col gap-2">
                        <button
                            className=" bg-amber-400 text-white px-2 py-2 rounded-md text-sm hover:bg-amber-500 cursor-pointer transition duration-200"
                            onClick={handleSubmit(onSubmit)}
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
                {errors && <p className="block text-sm text-red-600 mt-1">{errors?.message?.message}</p>}
            </form>
        </div>
    )
}

export default CommentReply