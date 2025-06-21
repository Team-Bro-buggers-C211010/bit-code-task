import { useSelector } from "react-redux";

const Comment = ({ comment }) => {
    const { user } = useSelector(state => state.auth);
    return (
        <div>
            <div className="space-y-6">
                <div className="flex gap-3 items-start">
                    <div className="flex justify-center items-center bg-amber-100 border-2 border-amber-400 font-medium w-10 h-10 rounded-full object-cover">
                        {comment?.user?.userName?.charAt(0).toUpperCase() + comment?.user?.userName?.charAt(1).toUpperCase()}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md shadow-sm w-full">
                        <div className="flex items-center mb-1">
                            <h4 className="font-semibold text-slate-800 text-sm">{comment?.user?.userName}</h4>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            {comment?.message}
                        </p>
                        {

                            <div className="flex justify-end gap-2 md:gap-4 mt-2">
                                {
                                    comment?.user?.userName === user?.userName &&
                                    <>
                                        <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                                            Edit
                                        </p>
                                        <p className="text-sm text-red-600 hover:underline cursor-pointer">
                                            Delete
                                        </p>
                                    </>
                                }
                                <p className="text-sm text-amber-600 hover:underline cursor-pointer">
                                    Reply
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment