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
)