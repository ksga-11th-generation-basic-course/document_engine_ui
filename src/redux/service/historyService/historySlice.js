import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, header } from "../../../utils/constant";

export const getHistoryByDocumentId = createAsyncThunk(
    `histories/getHistoryById`,
    async (documentId) => {
        try {
            const response = await api.get(`histories/${documentId}/);
            return response.data.payload;
        } catch (error) {
            throw error.response.data.detail;
        }
    }
);