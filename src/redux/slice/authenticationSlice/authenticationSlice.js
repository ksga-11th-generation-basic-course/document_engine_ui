import { createSlice } from "@reduxjs/toolkit";
import {
  forgotPassword,
  resetPassword,
  signin,
  signinWithGoogleAndFacebook,
  signup,
  signupWithGoogleAndFacebook,
  verifyOTP,
} from "../../service/authenticationService/authenticationService";

const initialState = {
  loading: false,
  authentication: {},
  OTPauthentication: {},
  resetAuthentication: {},
  checkAuthentication: {},
  error: "",
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signupWithGoogleAndFacebook.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        signupWithGoogleAndFacebook.fulfilled,
        (state, action) => {
          state.loading = false;
          state.authentication = action.payload;
          state.error = "";
        }
      ),
      builder.addCase(signupWithGoogleAndFacebook.rejected, (state, action) => {
        state.loading = true;
        state.authentication = {};
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
          state.error = "";
        }
      ),
      builder.addCase(signinWithGoogleAndFacebook.rejected, (state, action) => {
        state.loading = true;
        state.authentication = {};
        state.error = action.error.message;
      });
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.authentication = action.payload;
        state.error = "";
      }),
      builder.addCase(signup.rejected, (state, action) => {
        state.loading = true;
        state.authentication = {};
        state.error = action.error.message;
      });
    builder.addCase(signin.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.authentication = action.payload;
        state.error = "";
      }),
      builder.addCase(signin.rejected, (state, action) => {
        state.loading = true;
        state.authentication = {};
        state.error = action.error.message;
      });
    builder.addCase(verifyOTP.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.OTPauthentication = action.payload;
        state.error = "";
      }),
      builder.addCase(verifyOTP.rejected, (state, action) => {
        state.loading = true;
        state.OTPauthentication = {};
        state.error = action.error.message;
      });
    builder.addCase(forgotPassword.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.authentication = action.payload;
        state.error = "";
      }),
      builder.addCase(forgotPassword.rejected, (state, action) => {
        state.loading = true;
        state.authentication = {};
        state.error = action.error.message;
      });
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.resetAuthentication = action.payload;
        state.error = "";
      }),
      builder.addCase(resetPassword.rejected, (state, action) => {
        state.loading = true;
        state.resetAuthentication = {};
        state.error = action.error.message;
      });
  },
});

export default authenticationSlice.reducer;
