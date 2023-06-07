import { createSlice } from "@reduxjs/toolkit";
import {
  signinWithGoogleAndFacebook,
  signupWithGoogleAndFacebook,
} from "../../service/authenticationService/authenticationService";

const initialState = {
  isAuthenticated: false,
  authentication: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.authentication = action.payload;
    },
    signUpSuccess: (state, action) => {
      state.authentication = action.payload;
    },
    verifySuccess: (state, action) => {
      state.authentication = action.payload;
    },
    signOutSuccess: (state) => {
      state.isAuthenticated = false;
      state.authentication = null;
    },
    forgotPasswordSuccess: (state, action) => {
      state.authentication = action.payload;
    },
    resetPasswordSuccess: (state, action) => {
      state.authentication = action.payload;
    },
    enableAccountSuccess: (state, action) => {
      state.authentication = action.payload;
    },
    verifyToEnableAccountSuccess: (state, action) => {
      state.authentication = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupWithGoogleAndFacebook.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        signupWithGoogleAndFacebook.fulfilled,
        (state, action) => {
          state.loading = false;
          state.authentication = action.payload;
          state.error = null;
        }
      ),
      builder.addCase(signupWithGoogleAndFacebook.rejected, (state, action) => {
        state.loading = true;
        state.authentication = null;
        state.error = action.error.message;
      });

    builder.addCase(signinWithGoogleAndFacebook.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        signinWithGoogleAndFacebook.fulfilled,
        (state, action) => {
          state.loading = false;
          state.authentication = action.payload;
          state.error = null;
        }
      ),
      builder.addCase(signinWithGoogleAndFacebook.rejected, (state, action) => {
        state.loading = true;
        state.authentication = null;
        state.error = action.error.message;
      });
  },
});

export const {
  signInSuccess,
  signUpSuccess,
  verifySuccess,
  signOutSuccess,
  forgotPasswordSuccess,
  resetPasswordSuccess,
  enableAccountSuccess,
  verifyToEnableAccountSuccess,
} = authenticationSlice.actions;
export default authenticationSlice.reducer;
