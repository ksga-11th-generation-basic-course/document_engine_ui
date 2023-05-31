import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/api";

export const signupWithGoogleAndFacebook = createAsyncThunk(
  "authentications/signup/with/google/and/facebook",
  async (authentication) => {
    try {
      const response = await api.post(
        `authentications/signup/with/google/and/facebook`,
        {
          username: authentication.username,
          email: authentication.email,
          password: authentication.password,
          profileImage: authentication.profileImage,
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

export const signinWithGoogleAndFacebook = createAsyncThunk(
  "authentications/login/with/google/and/facebook",
  async (authentication) => {
    try {
      const response = await api.post(
        `authentications/login/with/google/and/facebook`,
        {
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

export const signup = createAsyncThunk(
  "authentications/signup",
  async (authentication) => {
    try {
      const response = await api.post(
        `authentications/signup`,
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

export const signin = createAsyncThunk(
  "authentications/login",
  async (authentication) => {
    try {
      const response = await api.post(
        `authentications/login`,
        {
          email: authentication.email,
          password: authentication.password,
        },
        {
          "Content-Type": "application/json",
        }
      );
      localStorage.setItem("token", response.data.payload.token);
      return response.data.payload;
    } catch (error) {
      throw Error(error.response.data)
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "authentications/verify",
  async (code) => {
    try {
      const response = await api.put(
        `authentications/verify?code=${code}`,
        {},
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

export const resendVerifyCode = createAsyncThunk(
  "authentications/resend",
  async (email) => {
    try {
      const response = await api.put(
        `authentications/resend?email=${email}`,
        {},
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

export const forgotPassword = createAsyncThunk(
  "authentications/forgot/password",
  async (email) => {
    try {
      const response = await api.put(
        `authentications/forgot/password?email=${email}`,
        {},
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

export const resetPassword = createAsyncThunk(
  "authentications/reset/password",
  async (authentication) => {
    try {
      const response = await api.put(
        `authentications/reset/password?email=${authentication.email}`,
        {
          newPassword: authentication.newPassword,
          newConfirmPassword: authentication.newConfirmPassword,
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
