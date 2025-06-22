import { createSlice } from '@reduxjs/toolkit';
import { addComment, getAllComments } from './commentThunk';
const initialState = {
    comments: [],
    isLoading: false
};

const commentSlice = createSlice(
    {
        name: "comment",
        initialState,
        reducers: {
            setIsReplying: (state, action) => {
                state.isReplying = action.payload
            }
        },
        extraReducers: (builder) => {
            builder.
                // get all comments
                addCase(getAllComments.pending, (state) => {
                    state.isLoading = true;
                })
                .addCase(getAllComments.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.comments = action.payload;
                })
                .addCase(getAllComments.rejected, (state) => {
                    state.isLoading = false;
                })

                // add comment
                .addCase(addComment.pending, (state) => {
                    state.isLoading = true;
                })
                .addCase(addComment.fulfilled, (state) => {
                    state.isLoading = false;
                })
                .addCase(addComment.rejected, (state) => {
                    state.isLoading = false;
                })
        }
    }
);

export default commentSlice.reducer;
