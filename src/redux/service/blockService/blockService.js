import { api, header } from "../../../utils/constant";

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