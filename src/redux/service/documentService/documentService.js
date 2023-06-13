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

export const getUsername = createAsyncThunk(
  `/documents/username`,
  async (documentId) => {
    try {
      const response = await api.get(`documents/${documentId}/username`, header);
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);

export const getWorkspaceName = createAsyncThunk(
  `/documents/workspace`,
  async (documentId) => {
    try {
      const response = await api.get(`documents/${documentId}/workspace`, header);
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);

export const createDocument = async (title,status,createDate,pageId,workspaceId) => {
  try {
    const response = await api.post(
      `documents`,
      {
        title:title,
        status: status,
        createdDate: createDate,
        pageId: pageId,
        workspaceId: workspaceId,
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
    console.log(error)
    throw error.response.data.detail;
  }
};

export const updateDocument = async (documentId,title) => {
  try {
    const response = await api.put(
      `documents/${documentId}?title=${title}`,
      {
        documentId:documentId,
        title:title,
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
    console.log(error)
    throw error.response.data.detail;
  }
};
