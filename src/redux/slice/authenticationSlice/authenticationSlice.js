import { createSlice } from "@reduxjs/toolkit";
import { signup } from "../../service/authenticationService/authenticationService";

const initialState = {
  loading: false,
  authentication: {},
  error: "",
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  extraReducers: (builder) => {
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
  },
});

export default authenticationSlice.reducer;
