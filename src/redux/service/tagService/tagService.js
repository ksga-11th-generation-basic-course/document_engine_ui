import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, header } from "../../../utils/constant";

export const getTagInEachWorkspace = createAsyncThunk(
    `tags`,
    async (workspaceId) => {
      try {
        const response = await api.get(
          `tags/${workspaceId}`,
          header
        );
        return response.data.payload;
      } catch (error) {
        throw error.response.data.detail;
      }
    }
  );