import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./slice/authenticationSlice/authenticationSlice";
import userSlice from "./slice/userSlice/userSlice";
import workspaceSlice from "./slice/workspaceSlice/workspaceSlice";
import documentSlice from "./slice/documentSlice/documentSlice";
import blockSlice from "./slice/blockSlice/blockSlice";
import tagSlice from "./slice/tagSlice/tagSlice";
import historySlice from "./slice/historySlice/historySlice";

const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    user: userSlice,
    workspace: workspaceSlice,
    document: documentSlice,
    block: blockSlice,
    tag: tagSlice,
    history: historySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
