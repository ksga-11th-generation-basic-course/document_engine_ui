import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, header } from "../../../utils/constant";

export const getHistoryByDocumentId = createAsyncThunk(
  `histories/getHistoryById`,
  async (documentId) => {
    try {
      const response = await api.get(`histories/documents/${documentId}`, header);
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);

/// remove history
export const removeHistoryByHistoryId = async (historyId, documentId) => {
  try {
    const response = await api.delete(`histories/${historyId}/documents/${documentId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type ": "application/json",
      },
    });
    return historyId;
  } catch (error) {
    console.log(error);
    throw error.response.data.detail;
  }
};