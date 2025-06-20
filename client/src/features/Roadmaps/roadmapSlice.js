import { createSlice } from "@reduxjs/toolkit";
import { getAllRoadmaps, getRoadmapById } from "./roadmapThunk";

const initialState = {
    roadmaps: [],
    isLoading: false,
    error: null,
    selectedRoadmap: null,
}

export const roadmapSlice = createSlice({
    name: "roadmap",
    initialState,
    extraReducers: (builder) => {
        builder
            // Fetch all roadmaps
            .addCase(getAllRoadmaps.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllRoadmaps.fulfilled, (state, action) => {
                state.isLoading = false;
                state.roadmaps = action.payload;
            })
            .addCase(getAllRoadmaps.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || "Failed to fetch roadmaps!";
            })

            // Fetch roadmap by ID
            .addCase(getRoadmapById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getRoadmapById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selectedRoadmap = action.payload;
            })
            .addCase(getRoadmapById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || "Failed to fetch roadmap!";
            })
    }
})

export default roadmapSlice.reducer;