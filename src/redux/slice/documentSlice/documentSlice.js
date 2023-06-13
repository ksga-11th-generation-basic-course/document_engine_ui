import { createSlice } from "@reduxjs/toolkit";
import {
  getAllDocumentInEachWorkspace,
  getDocumentByDocumentId,
  getUsername,
  getWorkspaceName
} from "../../service/documentService/documentService";

const initialState = {
  document: null,
  documents: null,
  username:null,
  workspace:null,
  loading: false,
  error: null,
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    createDocumentSuccess:(state,action)=>{
      state.documents.push(action.payload);
    },
    updateDocumentSuccess:(state,action)=>{
      state.documents.push(action.payload);
    },
    // removeDocumentSuccess: (state, action) => {
    //   state.documents = state.documents.filter(
    //     (document) => document.documentId !== action.payload
    //   );
    // },
  },
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

    builder.addCase(getUsername.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsername.fulfilled, (state, action) => {
      state.loading = false;
      state.username = action.payload;
      state.error = null;
    });
    builder.addCase(getUsername.rejected, (state, action) => {
      state.loading = true;
      state.username = null;
      state.error = action.error.message;
    });

    builder.addCase(getWorkspaceName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getWorkspaceName.fulfilled, (state, action) => {
      state.loading = false;
      state.workspace = action.payload;
      state.error = null;
    });
    builder.addCase(getWorkspaceName.rejected, (state, action) => {
      state.loading = true;
      state.workspace = null;
      state.error = action.error.message;
    });
  },
});
export const {createDocumentSuccess,updateDocumentSuccess,removeDocumentSuccess}=documentSlice.actions;
export default documentSlice.reducer;
