import { createSlice } from "@reduxjs/toolkit";
import { getTagInEachWorkspace } from "../../service/tagService/tagService";
const initialState = {
  tags:null,
  loading: false,
  error: null,
};

const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getTagInEachWorkspace.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getTagInEachWorkspace.fulfilled,
      (state, action) => {
        state.loading = false;
        state.tags = action.payload;
        state.error = null;
      }
    );
    builder.addCase(getTagInEachWorkspace.rejected, (state, action) => {
      state.loading = true;
      state.tags = null;
      state.error = action.error.message;
    });
  },
});
// export const {}=tagSlice.actions;
export default tagSlice.reducer;
