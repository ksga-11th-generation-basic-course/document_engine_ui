import { createSlice } from "@reduxjs/toolkit";
import {
  getAllWorkspace,
  getMemberInEachWorkspace,
  getWorkspaceByWorksapceId,
  removeWorkspaceService,
} from "../../service/workspaceService/workspaceService";

const initialState = {
  workspace: null,
  workspaces: null,
  members: null,
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
      state.workspaces.push(action.payload);
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

    builder.addCase(removeWorkspaceService.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeWorkspaceService.fulfilled, (state, action) => {
      state.loading = false;
      state.workspaces = state.workspaces.filter(
        (workspace) => workspace.workspaceId !== action.payload
      );
      state.error = null;
    });
    builder.addCase(removeWorkspaceService.rejected, (state, action) => {
      state.loading = true;
      state.workspace = null;
      state.error = action.error.message;
    });

    builder.addCase(getMemberInEachWorkspace.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMemberInEachWorkspace.fulfilled, (state, action) => {
      state.loading = false;
      state.members = action.payload;
      state.error = null;
    });
    builder.addCase(getMemberInEachWorkspace.rejected, (state, action) => {
      state.loading = true;
      state.members = null;
      state.error = action.error.message;
    });
  },
});

export const { createWorkspaceSuccess, joinWorkspaceSuccess, textSuccess } =
  workspaceSlice.actions;
export default workspaceSlice.reducer;
