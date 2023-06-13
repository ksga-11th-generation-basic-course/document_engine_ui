import { createSlice } from "@reduxjs/toolkit";
import {
  checkIsOwnerWorkspace,
  filterWorkspace,
  getAllWorkspace,
  getMemberInEachWorkspace,
  getWorkspaceByWorkspaceId,
  removeMemberInWorkspace,
  removeWorkspaceService,
} from "../../service/workspaceService/workspaceService";

const initialState = {
  workspace: null,
  workspaces: null,
  members: null,
  isOwner: false,
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
    editWorkspaceSuccess: (state, action) => {
      state.workspaces = state.workspaces.map((workspace) =>
        workspace.workspaceId === action.payload.workspaceId
          ? action.payload
          : workspace
      );
    },
    removeWorkspaceImageSuccess: (state, action) => {
      state.workspaces = state.workspaces.map((workspace) =>
        workspace.workspaceId === action.payload.workspaceId
          ? action.payload
          : workspace
      );
    },
    removeWorkspaceServiceSuccess: (state, action) => {
      state.workspaces = state.workspaces.filter(
        (workspace) => workspace.workspaceId !== action.payload
      );
    },
    setAccessibilitySuccess: (state, action) => {
      console.log(action.payload);
      state.members = state.members.map((member) =>
        member.userId === action.payload.userId ? action.payload : member
      );
    },
    leaveWorkspaceSuccess: (state, action) => {
      state.workspaces = state.workspaces.filter(
        (workspace) => workspace.workspaceId !== action.payload
      );
    },
    inviteMemberViaEmailSuccess : (state, action) => {
      state.workspace = action.payload
    }
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

    builder.addCase(getWorkspaceByWorkspaceId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getWorkspaceByWorkspaceId.fulfilled, (state, action) => {
      state.loading = false;
      state.workspace = action.payload;
      state.error = null;
    });
    builder.addCase(getWorkspaceByWorkspaceId.rejected, (state, action) => {
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

    builder.addCase(filterWorkspace.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(filterWorkspace.fulfilled, (state, action) => {
      state.loading = false;
      state.workspaces = action.payload;
      state.error = null;
    });
    builder.addCase(filterWorkspace.rejected, (state, action) => {
      state.loading = true;
      state.workspaces = null;
      state.error = action.error.message;
    });

    builder.addCase(removeMemberInWorkspace.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeMemberInWorkspace.fulfilled, (state, action) => {
      state.loading = false;
      state.members = state.members.filter(
        (member) => member.userId !== action.payload
      );
      state.error = null;
    });
    builder.addCase(removeMemberInWorkspace.rejected, (state, action) => {
      state.loading = true;
      state.workspace = null;
      state.error = action.error.message;
    });

    builder.addCase(checkIsOwnerWorkspace.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkIsOwnerWorkspace.fulfilled, (state, action) => {
      state.loading = false;
      state.isOwner = action.payload;
      state.error = null;
    });
    builder.addCase(checkIsOwnerWorkspace.rejected, (state, action) => {
      state.loading = true;
      state.isOwner = false;
      state.error = action.error.message;
    });
  },
});

export const {
  createWorkspaceSuccess,
  joinWorkspaceSuccess,
  editWorkspaceSuccess,
  removeWorkspaceImageSuccess,
  removeWorkspaceServiceSuccess,
  setAccessibilitySuccess,
  leaveWorkspaceSuccess,
  inviteMemberViaEmailSuccess
} = workspaceSlice.actions;
export default workspaceSlice.reducer;
