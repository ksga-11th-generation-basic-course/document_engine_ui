import { createSlice } from "@reduxjs/toolkit";
import { getBlockBydoucmentId } from "../../service/blockService/blockService";
const initialState = {
  block: null,
  blocks: null,
  loading: false,
  error: null,
};

const blockSlice = createSlice({
  name: "block",
  initialState,
  reducers: {
    createBlockSuccess: (state, action) => {
      state.blocks.push(action.payload);
    },
    updateBlockSuccess: (state, action) => {
      state.blocks = state.blocks.map((block) =>
        block.blockId === action.payload.blockId ? action.payload : block
      );
    },
    deleteBlockSuccess: (state, action) => {
      state.blocks = state.blocks.filter(
        (block) => block.blockId !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBlockBydoucmentId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBlockBydoucmentId.fulfilled, (state, action) => {
      state.loading = false;
      state.blocks = action.payload;
      state.error = null;
    });
    builder.addCase(getBlockBydoucmentId.rejected, (state, action) => {
      state.loading = true;
      state.blocks = null;
      state.error = action.error.message;
    });
  },
});
export const { createBlockSuccess, updateBlockSuccess, deleteBlockSuccess } =
  blockSlice.actions;
export default blockSlice.reducer;
