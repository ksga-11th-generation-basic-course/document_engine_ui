import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/constant";

export const getAllDocumentInEachWorkspace = createAsyncThunk(
  `documents`,
  async (workspaceId) => {
      try {
          const response = await api.get(`documents/workspaces/${workspaceId}?pageNo=1&pageSize=5&eSortCurrentDateTime=DEFAULT`, {
              {
          headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                  "Content-Type ": "application/json",
              },s: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type ": "application/json",
          },
        }
          });
          return response.data.payload;
      } catch (error) {
          console.log(error)
          throw error.response.data.detail;
      }
  }
);

export const getDocumentByDocumentId = createAsyncThunk(
  `documents/getdocumentbyid`,
  async (documentId) => {
    try {
      const response = await api.get(`documents/${documentId}`, {
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

export const removeDocument = async (documentId) => {
  try {
    const response = await api.delete(`documents/${documentId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type ": "application/json",
      },
    });
    return documentId;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const getUsername = createAsyncThunk(
  `/documents/username`,
  async (documentId) => {
    try {
      const response = await api.get(`documents/${documentId}/username`, {
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

export const getWorkspaceName = createAsyncThunk(
  `/documents/workspace`,
  async (documentId) => {
    try {
      const response = await api.get(`documents/${documentId}/workspace`, {
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

export const getMemberInEachDocument = createAsyncThunk(
  `/documents/member`,
  async (documentId) => {
    try {
      const response = await api.get(`/documents/${documentId}/member`, {
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

export const getDocumentRecently = createAsyncThunk(
  `/documents/recentlys`,
  async () => {
      try {
          const response = await api.get(`documents/recently`, {
              headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                  "Content-Type ": "application/json",
              },
          });
          return response.data.payload;
      } catch (error) {
          console.log(error)
          throw error.response.data.detail;
      }
  }
);

export const createDocument = async (
  title,
  status,
  createDate,
  pageId,
  workspaceId
) => {
  try {
    const response = await api.post(
      `documents`,
      {
        title: title,
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
    console.log(error);
    throw error.response.data.detail;
  }
};

export const duplicateDocument = async (documentId) => {
  try {
    const response = await api.post(
      `documents/${documentId}/duplicate`,
      {
        documentId: documentId,
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
    console.log(error);
    throw error.response.data.detail;
  }
};

export const updateDocument = async (documentId, title) => {
  try {
    const response = await api.put(
      `documents/${documentId}?title=${title}`,
      {
        documentId: documentId,
        title: title,
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
    console.log(error);
    throw error.response.data.detail;
  }
};

export const setAccessibility = async (
  documentId,
  userId,
  workspaceId,
  accessibility
) => {
  console.log(documentId);
  try {
    const response = await api.put(
      `documents/${documentId}/users/${userId}/${workspaceId}/accessibility/?accessibility=${accessibility}`,
      {
        documentId: documentId,
        userId: userId,
        workspaceId: workspaceId,
        accessibility: accessibility,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    console.log(response);
    return response.data.payload;
  } catch (error) {
    console.log(error);
    throw error.response.data.detail;
  }
};

export const setCurrentEditing = createAsyncThunk(
  `document/current/editing`,
  async (documentId) => {
    try {
      const response = await api.put(
        `documents/${documentId}/editing`,
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type ": "application/json",
          },
        }
      );
      console.log(response);
      return response.data.payload;
    } catch (error) {
      throw error.response.data.detail;
    }
  }
);
