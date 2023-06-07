import { createSlice } from "@reduxjs/toolkit";
import {
  getAllWorkspace,
  getWorkspaceByWorksapceId,
} from "../../service/workspaceService/workspaceService";

const initialState = {
  workspace: null,
  workspaces: null,
  loading: false,
  error: null,
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    createWorkspaceSuccess: (state, action) => {
      state.workspaces.push(action.payload);
    },
    joinWorkspaceSuccess: (state, action) => {
      state.workspace = action.payload;
    },
    removeWorkspaceSuccess: (state, action) => {
      state.workspace = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllWorkspace.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllWorkspace.fulfilled, (state, action) => {
      state.loading = false;
      state.workspaces = action.payload;
      state.error = null;
    });
    builder.addCase(getAllWorkspace.rejected, (state, action) => {
      state.loading = true;
      state.workspaces = null;
      state.error = action.error.message;
    });

    builder.addCase(getWorkspaceByWorksapceId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getWorkspaceByWorksapceId.fulfilled, (state, action) => {
      state.loading = false;
      state.workspace = action.payload;
      state.error = null;
    });
    builder.addCase(getWorkspaceByWorksapceId.rejected, (state, action) => {
      state.loading = true;
      state.workspace = null;
      state.error = action.error.message;
    });
  },
});

export const {
  createWorkspaceSuccess,
  joinWorkspaceSuccess,
  removeWorkspaceSuccess,
  textSuccess,
} = workspaceSlice.actions;
export default workspaceSlice.reducer;
