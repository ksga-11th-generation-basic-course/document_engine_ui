import { createSlice } from "@reduxjs/toolkit";
import { getHistoryByDocumentId } from "../../service/historyService/historyService";

const initialState = {
  histories: null,
  title: null,
  loading: false,
  error: null,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    removeHistorySuccess: (state, action) => {
      state.histories = state.histories.filter(
        (history) => history.historyId !== action.payload
      );
    },
    restoreDocumentSuccess: (state, action) => {
      state.title = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getHistoryByDocumentId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHistoryByDocumentId.fulfilled, (state, action) => {
      state.loading = false;
      state.histories = action.payload;
      state.error = null;
    });
    builder.addCase(getHistoryByDocumentId.rejected, (state, action) => {
      state.loading = true;
      state.histories = null;
    });
  },
});
export const { removeHistorySuccess, restoreDocumentSuccess } = historySlice.actions;
export default historySlice.reducer;
