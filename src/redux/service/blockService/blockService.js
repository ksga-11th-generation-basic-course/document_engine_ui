import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/constant";

export const createBlock = async (blockType, content, documentId) => {
    try {
        const response = await api.post(
            `blocks`,
            {
                blockType: blockType,
                content: content,
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
        console.log(error)
        throw error.response.data.detail;
    }
};

export const getBlockBydoucmentId = createAsyncThunk(
    `/documents/blocks`,
    async (documentId) => {
        try {
            const response = await api.get(`blocks/${documentId}`, {
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