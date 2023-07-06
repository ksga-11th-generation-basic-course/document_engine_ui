import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/constant";

export const createBlock = async (
  blockId,
  blockType,
  content,
  order,
  documentId
) => {
  try {
    const response = await api.post(
      `blocks`,
      {
        blockId: blockId,
        blockType: blockType,
        content: content,
        order: order,
        documentId: documentId,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    // console.log(response.data.payload);
    return response.data.payload;
  } catch (error) {
    console.log(error);
    throw error.response.data.status;
  }
};

export const getBlockBydoucmentId = createAsyncThunk(
  `/documents/blocks`,
  async (documentId) => {
    // console.log("documentId", documentId)
    try {
      const response = await api.get(`blocks/${documentId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      });
      // console.log("service", response.data.payload)
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);

export const updateBlock = async (blockId, documentId, content, order) => {
  try {
    const response = await api.put(
      `blocks/${blockId}/documents/${documentId}?order=${order}`,
      {
        ...content,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    // console.log(response.data.payload);
    return response.data.payload;
  } catch (error) {
    console.log(error);
    throw error.response.data.detail;
  }
};

export const deleteBlock = async (blockId, documentId) => {
  try {
    const response = await api.delete(
      `blocks/${blockId}/documents/${documentId}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return blockId;
  } catch (error) {
    throw error.response.data.detail;
  }
};
