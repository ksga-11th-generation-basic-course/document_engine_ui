import { createSlice } from "@reduxjs/toolkit";
import {
  getBlockHistory,
  getHistoryByDocumentId,
  getHistoryByHistoryId,
} from "../../service/historyService/historyService";

const initialState = {
  histories: null,
  blockHistory: null,
  history: null,
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
    clearHistoriesSuccess: (state) => {
      state.histories = null;
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
      state.error = action.error.message;
    });

    builder.addCase(getBlockHistory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBlockHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.blockHistory = action.payload;
      state.error = null;
    });
    builder.addCase(getBlockHistory.rejected, (state, action) => {
      state.loading = true;
      state.blockHistory = null;
      state.error = action.error.message;
    });

    builder.addCase(getHistoryByHistoryId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHistoryByHistoryId.fulfilled, (state, action) => {
      state.loading = false;
      state.history = action.payload;
      state.error = null;
    });
    builder.addCase(getHistoryByHistoryId.rejected, (state, action) => {
      state.loading = true;
      state.history = null;
      state.error = action.error.message;
    });
  },
});
export const {
  removeHistorySuccess,
  restoreDocumentSuccess,
  clearHistoriesSuccess,
} = historySlice.actions;
export default historySlice.reducer;
