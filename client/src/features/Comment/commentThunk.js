import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxiosSecure from './../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';

export const getAllComments = createAsyncThunk(
    "comment/getAllComments",
    async (roadmapId, thunkAPI) => {
        try {
            const axiosSecure = useAxiosSecure();
            const res = await axiosSecure.get(`/comment/${roadmapId}`);
            return res.data;
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Failed to fetch comments!";
            toast.error(errorMessage);
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const addComment = createAsyncThunk(
    "comment/addComment",
    async (commentData, thunkAPI) => {
        try {
            const axiosSecure = useAxiosSecure();
            const res = await axiosSecure.post("/comment", commentData);
            toast.success("Comment added successfully!");
            return res.data;
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Failed to add comment!";
            toast.error(errorMessage);
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const deleteComment = createAsyncThunk(
    "comment/deleteComment",
    async (commentId, thunkAPI) => {
        try {
            const axiosSecure = useAxiosSecure();
            await axiosSecure.delete(`/comment/${commentId}`);
            toast.success("Comment deleted successfully!");
            return commentId;
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Failed to delete comment!";
            toast.error(errorMessage);
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const editComment = createAsyncThunk(
    "comment/editComment",
    async (commentData, thunkAPI) => {
        try {
            const axiosSecure = useAxiosSecure();
            const { id, message } = commentData;
            const res = await axiosSecure.put(`/comment/${id}`, { message });
            toast.success("Comment updated successfully!");
            return res.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Failed to update comment!";
            toast.error(errorMessage);
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
)