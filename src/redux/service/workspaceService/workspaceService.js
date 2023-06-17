import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/constant";

export const createWorkspace = async (workspaceName, url) => {
  try {
    const response = await api.post(
      `workspaces`,
      {
        workspaceName: workspaceName,
        workspaceImage: url,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const joinWorkspace = async (workspaceCode) => {
  try {
    const response = await api.post(
      `workspaces/member?workspaceCode=${workspaceCode}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const getAllWorkspace = createAsyncThunk(`workspaces`, async (body) => {
  try {
    const response = await api.get(
      `workspaces?pageNo=${body.no}&pageSize=${body.size}&asc=${body.asc}&desc=${body.desc}&eSortWorkspace=${body.sortbydatetime}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
});

export const removeWorkspaceService = async (workspaceId) => {
  try {
    const response = await api.delete(`workspaces/${workspaceId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type ": "application/json",
      },
    });
    return workspaceId;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const getWorkspaceByWorkspaceId = createAsyncThunk(
  "workspaces/getworkspaceId",
  async (workspaceId) => {
    try {
      const response = await api.get(`workspaces/${workspaceId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      });
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);

export const getMemberInEachWorkspace = createAsyncThunk(
  "workspaces/member",
  async (workspaceId) => {
    try {
      const response = await api.get(`workspaces/${workspaceId}/member`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      });
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);

export const filterWorkspace = createAsyncThunk(
  "workspaces/filter",
  async (checked) => {
    try {
      const response = await api.get(`workspaces/filter?filter=${checked}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      });
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);

export const editWorkspace = async (workspaceId, workspaceName, url) => {
  try {
    const response = await api.put(
      `workspaces/${workspaceId}`,
      {
        workspaceName: workspaceName,
        workspaceImage: url,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );

    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const removeWorkspaceImage = async (workspaceId) => {
  try {
    const response = await api.delete(
      `workspaces/image?workspaceId=${workspaceId}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const removeMemberInWorkspace = async (userId, workspaceIdProp) => {
  try {
    const response = await api.delete(
      `workspaces/member?userId=${userId}&workspaceId=${workspaceIdProp}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return userId;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const setAccessibility = async (userId, workspaceId, status) => {
  try {
    const response = await api.put(
      `workspaces/accessibility?userId=${userId}&workspaceId=${workspaceId}&status=${status}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const checkIsOwnerWorkspace = createAsyncThunk(
  "workspaces/isOwner",
  async (body) => {
    try {
      const response = await api.get(
        `workspace/${body.workspaceId}/user/${body.userId}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type ": "application/json",
          },
        }
      );
      console.log(response.data.payload);
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);

export const leaveWorkspaceService = async (workspaceId) => {
  try {
    const response = await api.delete(
      `workspaces/leave?workspaceId=${workspaceId}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return workspaceId;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const inviteMemberViaEmail = async (workspaceId, email) => {
  try {
    const response = await api.post(
      `workspaces/${workspaceId}/invite?email=${email}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};
