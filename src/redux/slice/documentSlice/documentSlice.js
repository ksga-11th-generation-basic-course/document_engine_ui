import { createSlice } from "@reduxjs/toolkit";
import {
  getAllDocumentInEachWorkspace,
  getDocumentByDocumentId,
  getUsername,
  getWorkspaceName,
  getMemberInEachDocument,
  getDocumentRecently,
} from "../../service/documentService/documentService";

const initialState = {
  document: null,
  documents: null,
  username:null,
  workspace:null,
  members:null,
  recently:null,
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
    removeDocumentSuccess: (state, action) => {
      state.documents = state.documents.filter(
        (document) => document.documentId !== action.payload
      );
    },
    duplicateDocumentSuccess:(state,action)=>{
      state.documents.push(action.payload);
    },
    setAccessibilitySuccess:(state,action)=>{
      state.members = state.members.map((member) =>
        member.userId === action.payload.userId ? action.payload : member
      );
    },
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

    builder.addCase(getDocumentRecently.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getDocumentRecently.fulfilled,
      (state, action) => {
        state.loading = false;
        state.recently = action.payload;
        state.error = null;
      }
    );
    builder.addCase(getDocumentRecently.rejected, (state, action) => {
      state.loading = true;
      state.recently = null;
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

    builder.addCase(getMemberInEachDocument.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMemberInEachDocument.fulfilled, (state, action) => {
      state.loading = false;
      state.members = action.payload;
      state.error = null;
    });
    builder.addCase(getMemberInEachDocument.rejected, (state, action) => {
      state.loading = true;
      state.members = null;
      state.error = action.error.message;
    });
  },
});
export const {createDocumentSuccess,updateDocumentSuccess,removeDocumentSuccess,duplicateDocumentSuccess,setAccessibilitySuccess}=documentSlice.actions;
export default documentSlice.reducer;