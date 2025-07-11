import { createSlice } from "@reduxjs/toolkit";
import { checkAuth, loginUser, logoutUser, registerUser } from "./authThunk";

const initialState = {
    isAuthenticated: false,
    isLogin: false,
    isRegister: false,
    user: null,
    isCheckingAuth: true,
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

            // Handle Logout
            .addCase(logoutUser.pending, (state) => {
                state.isAuthenticated = false;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(logoutUser.rejected, (state) => {
                state.isAuthenticated = false;
            })

            // Check Auth
            .addCase(checkAuth.pending, (state) => {
                state.isCheckingAuth = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isCheckingAuth = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isCheckingAuth = false;
            })
    }
})

export default authSlice.reducer;