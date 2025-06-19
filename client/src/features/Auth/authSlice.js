import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authThunk";

const initialState = {
    isAuthenticated: false,
    isLogin: false,
    isRegister: false,
    user: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle Register
            .addCase(registerUser.pending, (state) => {
                state.isRegister = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isRegister = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state) => {
                state.isRegister = false;
            })

            // Handle Login
            .addCase(loginUser.pending, (state) => {
                state.isLogin = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLogin = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLogin = false;
            })
    }
})

export default authSlice.reducer;