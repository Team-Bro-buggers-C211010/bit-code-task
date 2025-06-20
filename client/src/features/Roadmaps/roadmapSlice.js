import { createSlice } from "@reduxjs/toolkit";
import { createRoadmap, getAllRoadmaps, getRoadmapById, upvoteRoadmap } from "./roadmapThunk";

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
                console.log(state.selectedRoadmap);
            })
            .addCase(getRoadmapById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || "Failed to fetch roadmap!";
            })

            // Upvote roadmap
            .addCase(upvoteRoadmap.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(upvoteRoadmap.fulfilled, (state, action) => {
                const { roadmapId, upvotesCount, isUpVoted } = action.payload;
                state.isLoading = false;
                state.roadmaps = state.roadmaps.map(roadmap => 
                    roadmap._id === roadmapId ? { ...roadmap, upvotesCount, isUpVoted } : roadmap
                );
            })
            .addCase(upvoteRoadmap.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || "Failed to upvote roadmap!";
            })

            // create new roadmap
            .addCase(createRoadmap.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createRoadmap.fulfilled, (state, action) => {
                state.isLoading = false;
                state.roadmaps.push(action.payload);
            })
            .addCase(createRoadmap.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || "Failed to create roadmap!";
            })
    }
})

export default roadmapSlice.reducer;