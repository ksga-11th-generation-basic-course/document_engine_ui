import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../service/userService/userService";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    closeAccountSuccess: (state, action) => {
      state.user = action.payload;
    },
    changePasswordSuccess: (state, action) => {
      state.user = action.payload;
    },
    editProfileInformationSuccess: (state, action) => {
      state.user = action.payload;
    },
    deleteProfileImageSuccess: (state, action) => {
      state.user = action.payload;
    },
    getCurrentUserSuccess: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.loading = true;
      state.user = null;
      state.error = action.error.message;
    });
  },
});

export const {
  closeAccountSuccess,
  changePasswordSuccess,
  editProfileInformationSuccess,
  deleteProfileImageSuccess,
} = userSlice.actions;
export default userSlice.reducer;
