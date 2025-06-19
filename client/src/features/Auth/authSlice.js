import { createSlice } from "@reduxjs/toolkit";

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
    extraReducers: () => {}
})

export default authSlice.reducer;