import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/constant";

export const getTagInEachWorkspace = createAsyncThunk(
  `tags/workspace`,
  async (workspaceId) => {
    try {
      const response = await api.get(`tags/workspace/${workspaceId}`, {
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

export const createTag = createAsyncThunk(`tags/createTag`, async (body) => {
  try {
    const response = await api.post(
      `tags`,
      {
        tagName: body.tagName,
        workspaceId: body.workspaceId,
        documentId: body.documentId,
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
    console.log(error);
  }
});

export const getTagByDocumentId = createAsyncThunk(
  `tags/document`,
  async (documentId) => {
    try {
      const response = await api.get(`tags/document/${documentId}`, {
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

export const deleteTagFromDocument = createAsyncThunk(
  `tags/deletedocument`,
  async (body) => {
    try {
      const response = await api.delete(
        `tags/${body.tagId}/document/${body.documentId}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type ": "application/json",
          },
        }
      );
      return body.tagId;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);

export const addTagToDocument = createAsyncThunk(
  `tags/addTagToDocument`,
  async (body) => {
    try {
      const response = await api.post(
        `tags/add?tagId=${body.tagId}&documentId=${body.documentId}&workspaceId=${body.workspaceId}`,
        {
          tagId: body.tagId,
          workspaceId: body.workspaceId,
          documentId: body.documentId,
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
      console.log(error.response.data.status);
    }
  }
);
