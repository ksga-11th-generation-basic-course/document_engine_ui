import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, header } from "../../../utils/constant";

export const getAllDocumentInEachWorkspace = createAsyncThunk(
  `documents`,
  async (workspaceId) => {
    try {
      const response = await api.get(
        `documents/workspaces/${workspaceId}?pageNo=1&pageSize=5`,
        header
      );
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);

export const getDocumentByDocumentId = createAsyncThunk(
  `documents/getdocumentbyid`,
  async (documentId) => {
    try {
      const response = await api.get(`documents/${documentId}`, header);
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);
