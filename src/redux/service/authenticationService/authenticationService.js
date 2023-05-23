import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/api";

export const signup = createAsyncThunk(
  "users/signup",
  async (authentication) => {
    try {
      const response = await api.post(
        `users/signup`,
        {
          username: authentication.username,
          email: authentication.email,
          password: authentication.password,
        },
        {
          "Content-Type": "application/json",
        }
      );
      return response.data.payload;
    } catch (error) {
      return error;
    }
  }
);
