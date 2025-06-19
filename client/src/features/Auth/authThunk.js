import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      const axiosSecure = useAxiosSecure();
      const res = await axiosSecure.post("/auth/register", userData);
      toast.success("Registration successful!");
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Registration failed!";
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const axiosSecure = useAxiosSecure();
      const res = await axiosSecure.post("/auth/login", userData);
      toast.success("Login successful!");
      return res.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed!";
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_, thunkAPI) => {
        try {
        const axiosSecure = useAxiosSecure();
        await axiosSecure.get("/auth/logout");
        toast.success("Logout successful!");
        return null;
        } catch (error) {
        const errorMessage = error.response?.data?.message || "Logout failed!";
        toast.error(errorMessage);
        return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);
