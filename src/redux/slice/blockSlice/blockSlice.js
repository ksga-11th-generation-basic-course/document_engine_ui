import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    block: null,
    loading: false,
    error: null,
};

const blockSlice = createSlice({
    name: "block",
    initialState,
    reducers: {
        createBlockSuccess: (state, action) => {
            state.block.push(action.payload);
        },
        updateBlockSuccess: (state, action) => {
            state.block.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        
    },
});
export const { createBlockSuccess,updateBlockSuccess } = blockSlice.actions;
export default blockSlice.reducer;
