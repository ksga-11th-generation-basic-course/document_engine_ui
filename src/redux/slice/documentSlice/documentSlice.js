import { createSlice } from "@reduxjs/toolkit";
import {
  getAllDocumentInEachWorkspace,
  getDocumentByDocumentId,
} from "../../service/documentService/documentService";

const initialState = {
  document: null,
  documents: null,
  loading: false,
  error: null,
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllDocumentInEachWorkspace.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAllDocumentInEachWorkspace.fulfilled,
      (state, action) => {
        state.loading = false;
        state.documents = action.payload;
        state.error = null;
      }
    );
    builder.addCase(getAllDocumentInEachWorkspace.rejected, (state, action) => {
      state.loading = true;
      state.documents = null;
      state.error = action.error.message;
    });

    builder.addCase(getDocumentByDocumentId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDocumentByDocumentId.fulfilled, (state, action) => {
      state.loading = false;
      state.document = action.payload;
      state.error = null;
    });
    builder.addCase(getDocumentByDocumentId.rejected, (state, action) => {
      state.loading = true;
      state.document = null;
      state.error = action.error.message;
    });
  },
});

export default documentSlice.reducer;
