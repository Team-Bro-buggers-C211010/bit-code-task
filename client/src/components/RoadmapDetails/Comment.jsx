import { useDispatch, useSelector } from "react-redux";
import CommentReply from "./CommentReply";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addComment, deleteComment, editComment, getAllComments } from "../../features/Comment/commentThunk";

const Comment = ({ comment }) => {
    const { user } = useSelector(state => state.auth);
    const { selectedRoadmap } = useSelector(state => state.roadmap);
    const [isReplying, setIsReplying] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const [editedComment, setEditedComment] = useState(comment.message);

    const onSubmit = async (data) => {
        await dispatch(addComment({ ...data, roadmap: selectedRoadmap._id, user: user._id, parentCommentId: comment._id }));
        setIsReplying(false);
        await dispatch(getAllComments(selectedRoadmap._id));
        reset();
    }

    const handleDelete = async (id) => {
        await dispatch(deleteComment(id));
        await dispatch(getAllComments(selectedRoadmap._id));
    }

    const handleEditComment = async (data) => {
        await dispatch(editComment(data));
        setIsEditing(false);
        await dispatch(getAllComments(selectedRoadmap._id));
    }

    return (
        <div className={`${comment.nestedDepth > 0 ? 'border-l-2 border-gray-200 pl-4 md:pl-6' : ''}`}>
            <div className="flex gap-3 items-start">
                <div className="flex-shrink-0">
                    <div className="flex justify-center items-center bg-amber-100 border-2 border-amber-400 font-medium w-10 h-10 rounded-full">
                        {comment?.user?.userName?.slice(0, 2).toUpperCase()}
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md shadow-sm w-full">
                    <div className="flex items-center mb-1">
                        <h4 className="font-semibold text-slate-800 text-sm">
                            {comment?.user?.userName}
                        </h4>
                    </div>
                    {
                        isEditing ? <>
                            <form className="w-full flex gap-2">
                                <textarea
                                    rows="2"
                                    defaultValue={comment?.message}
                                    placeholder="Update your comment..."
                                    onChange={(e) => setEditedComment(e.target.value)}
                                    className={`w-full px-4 py-2 border border-gray-300 rounded outline-none`}
                                ></textarea>
                                <div className="flex flex-col gap-2">
                                    <button
                                        className=" bg-amber-400 text-white px-2 py-2 rounded-md text-sm hover:bg-amber-500 cursor-pointer transition duration-200"
                                        onClick={ () => handleEditComment({ id: comment._id, message: editedComment })}
                                    >
                                        Update
                                    </button>
                                    <p
                                        className="text-sm text-gray-600 hover:underline cursor-pointer"
                                        onClick={() => setIsEditing(false)}
                                    >
                                        Cancel
                                    </p>
                                </div>
                            </form>
                        </> :
                            <>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {comment?.message}
                                </p>

                                <div className="flex justify-end gap-4 mt-2">
                                    {comment?.user?.userName === user?.userName && (
                                        <>
                                            <p onClick={() => setIsEditing(!isEditing)} className="text-sm text-blue-600 hover:underline cursor-pointer">
                                                Edit
                                            </p>
                                            <p onClick={() => handleDelete(comment._id)} className="text-sm text-red-600 hover:underline cursor-pointer">
                                                Delete
                                            </p>
                                        </>
                                    )}
                                    {comment.nestedDepth < 2 && (
                                        <p
                                            className="text-sm text-amber-600 hover:underline cursor-pointer"
                                            onClick={() => setIsReplying(!isReplying)}
                                        >
                                            Reply
                                        </p>
                                    )}
                                </div>
                            </>
                    }
                </div>
            </div>

            {
                isReplying && comment.nestedDepth < 2 && (
                    <CommentReply onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} errors={errors} setIsReplying={setIsReplying} comment={comment} />
                )
            }

            {/* Nested Replies */}
            {comment.replies && comment.replies.length > 0 && (
                <div className="space-y-4 mt-4 pl-2">
                    {comment.replies.map(reply => (
                        <Comment key={reply._id} comment={reply} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Comment;