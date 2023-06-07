import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, header } from "../../../utils/constant";

export const createWorkspace = async (workspaceName, url) => {
  try {
    const response = await api.post(
      `workspaces`,
      {
        workspaceName: workspaceName,
        workspaceImage: url,
      },
      header
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
      header
    );
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const getAllWorkspace = createAsyncThunk(`workspaces`, async () => {
  try {
    const response = await api.get(`workspaces?pageNo=1&pageSize=6`, header);
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
      const response = await api.delete(`workspaces/${workspaceId}`, header);
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
      const response = await api.get(`workspaces/${workspaceId}`, header);
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);
