import { createSlice } from "@reduxjs/toolkit";
import {
  addTagToDocument,
  createTag,
  deleteTagFromDocument,
  getTagByDocumentId,
  getTagInEachWorkspace,
} from "../../service/tagService/tagService";
const initialState = {
  tagsWorkspace: null,
  tagsDocument: null,
  loading: false,
  error: null,
};

const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTagInEachWorkspace.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTagInEachWorkspace.fulfilled, (state, action) => {
      state.loading = false;
      state.tagsWorkspace = action.payload;
      state.error = null;
    });
    builder.addCase(getTagInEachWorkspace.rejected, (state, action) => {
      state.loading = true;
      state.tagsWorkspace = null;
      state.error = action.error.message;
    });

    builder.addCase(createTag.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createTag.fulfilled, (state, action) => {
      state.loading = false;
      state.tagsWorkspace.push(action.payload);
      state.tagsDocument.push(action.payload);
      state.error = null;
    });
    builder.addCase(createTag.rejected, (state, action) => {
      state.loading = true;
      state.tagsWorkspace = null;
      state.tagsDocument = null;
      state.error = action.error.message;
    });

    builder.addCase(getTagByDocumentId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTagByDocumentId.fulfilled, (state, action) => {
      state.loading = false;
      state.tagsDocument = action.payload;
      state.error = null;
    });
    builder.addCase(getTagByDocumentId.rejected, (state, action) => {
      state.loading = true;
      state.tagsDocument = null;
      state.error = action.error.message;
    });

    builder.addCase(deleteTagFromDocument.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTagFromDocument.fulfilled, (state, action) => {
      state.loading = false;
      state.tagsDocument = state.tagsDocument.filter(
        (tag) => tag.tagId !== action.payload
      );
      state.error = null;
    });
    builder.addCase(deleteTagFromDocument.rejected, (state, action) => {
      state.loading = true;
      state.tagsDocument = null;
      state.error = action.error.message;
    });

    builder.addCase(addTagToDocument.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTagToDocument.fulfilled, (state, action) => {
      state.loading = false;
      state.tagsDocument.push(action.payload);
      state.error = null;
    });
    builder.addCase(addTagToDocument.rejected, (state, action) => {
      state.loading = true;
      state.tagsDocument = null;
      state.error = action.error.message;
    });
  },
});
export const {} = tagSlice.actions;
export default tagSlice.reducer;
