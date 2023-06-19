import { createSlice } from "@reduxjs/toolkit";
import { getHistoryByDocumentId } from "../../service/historyService/historyService";

const initialState = {
    histories: null,

  loading: false,
  error: null,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getHistoryByDocumentId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getHistoryByDocumentId.fulfilled,
      (state, action) => {
        state.loading = false;
        state.histories = action.payload;
        state.error = null;
      }
    );
    builder.addCase(getHistoryByDocumentId.rejected, (state, action) => {
      state.loading = true;
      state.histories = null;
      state.error = action.error.message;
    });

    
  },
});
export const {}= historySlice.actions;
export default historySlice.reducer;