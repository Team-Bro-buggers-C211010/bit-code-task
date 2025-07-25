import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

export const getAllRoadmaps = createAsyncThunk(
  "roadmap/getAllRoadmaps",
  async (filterSort, thunkAPI) => {
    try {
      const axiosSecure = useAxiosSecure();
      const { category, status, sortBy } = filterSort;
      const res = await axiosSecure.get(`/roadmap?category=${category}&status=${status}&sortBy=${sortBy}`);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch roadmaps!";
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getRoadmapById = createAsyncThunk(
  "roadmap/getRoadmapById",
  async (roadmapId, thunkAPI) => {
    try {
      const axiosSecure = useAxiosSecure();
      const res = await axiosSecure.get(`/roadmap/${roadmapId}`);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch roadmap!";
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const upvoteRoadmap = createAsyncThunk(
  "roadmap/upvoteRoadmap",
  async (roadmapId, thunkAPI) => {
    try {
      const axiosSecure = useAxiosSecure();
      const res = await axiosSecure.put(`/roadmap/${roadmapId}/upvote`);
      toast.success("Roadmap upvoted successfully!");
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to upvote roadmap!";
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const createRoadmap = createAsyncThunk(
  "roadmap/createRoadmap",
  async (roadmapData, thunkAPI) => {
    try {
      const axiosSecure = useAxiosSecure();
      const res = await axiosSecure.post("/roadmap", roadmapData);
      toast.success("Roadmap created successfully!");
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to create roadmap!";
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
