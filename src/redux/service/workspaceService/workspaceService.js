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
    console.log(response.data.payload);
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

export const getAllWorkspace = createAsyncThunk(`workspaces`, async () => {
  try {
    const response = await api.get(`workspaces?pageNo=1&pageSize=6`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type ": "application/json",
      },
    });
    // console.log(response.data.payload);
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
});

export const removeWorkspaceService = createAsyncThunk(
  "workspaces/remove",
  async (workspaceId) => {
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
  }
);

export const getWorkspaceByWorksapceId = createAsyncThunk(
  "workspaces/workspaceId",
  async (workspaceId) => {
    try {
      const response = await api.get(`workspaces/${workspaceId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      });
      console.log(response.data.payload)
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
