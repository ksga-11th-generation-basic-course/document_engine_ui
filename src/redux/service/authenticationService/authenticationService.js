import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/constant";

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
      console.log(response.data.payload);
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

export const signup = async (authentication) => {
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
    localStorage.setItem("email", response.data.payload.email);
    return response.data.payload;
  } catch (error) {
    throw new Error("Sign-up failed");
  }
};

export const signin = async (authentication) => {
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

    const user = JSON.stringify(response.data.payload);
    
    localStorage.setItem("user", user);
    localStorage.setItem("token", response.data.payload.token);
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const verifyOTP = async (code) => {
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
    throw error.response.data.detail;
  }
};

export const resendVerifyCode = async (email) => {
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
    throw error.response.data.detail;
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await api.put(
      `authentications/forgot/password?email=${email}`,
      {},
      {
        "Content-Type": "application/json",
      }
    );
    localStorage.setItem("email", response.data.payload.email);
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const resetPassword = async (authentication) => {
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
    throw error.response.data.detail;
  }
};

export const enableAccount = async (email) => {
  try {
    const response = await api.put(
      `authentications/enable/account?email=${email}`,
      {},
      {
        "Content-Type": "application/json",
      }
    );
    localStorage.setItem("email", response.data.payload.email);
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const verifyToEnableAccount = async (code) => {
  try {
    const response = await api.put(
      `authentications/verify/enable/account?optCode=${code}`,
      {},
      {
        "Content-Type": "application/json",
      }
    );
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};
