import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/constant";

export const getHistoryByDocumentId = createAsyncThunk(
  `histories/getHistoryById`,
  async (documentId) => {
    console.log(documentId)
    try {
      const response = await api.get(`histories/documents/${documentId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      });
      // console.log(response.data.payload)
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);

/// remove history
export const removeHistoryByHistoryId = async (historyId, documentId) => {
  try {
    const response = await api.delete(
      `histories/${historyId}/documents/${documentId}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return historyId;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const restoreDocument = async (historyId, documentId) => {
  try {
    const response = await api.put(
      `histories/${historyId}/documents/${documentId}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return response.data.response;
  } catch (error) {
    // console.log(error);
    throw error.response.data.detail;
  }
};

export const getBlockHistory = createAsyncThunk(
  `histories/block`,
  async (historyId) => {
    try {
      const response = await api.get(`blocks/history/${historyId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      });
      // console.log(response.data.payload);
      return response.data.payload;
    } catch (error) {
      console.log(error)
      throw error.response.data.detail;
    }
  }
);

export const getHistoryByHistoryId = createAsyncThunk(
  `histories/byhistoryid`,
  async (historyId) => {
    try {
      const response = await api.get(`histories/${historyId}`, {
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
  }
);
