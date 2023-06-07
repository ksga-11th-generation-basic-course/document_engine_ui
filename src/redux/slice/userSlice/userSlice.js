import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
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
  },
});

export const {
  closeAccountSuccess,
  changePasswordSuccess,
  editProfileInformationSuccess,
  deleteProfileImageSuccess,
} = userSlice.actions;
export default userSlice.reducer;
