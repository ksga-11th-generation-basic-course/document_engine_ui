import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./slice/authenticationSlice/authenticationSlice";
import userSlice from "./slice/userSlice/userSlice";
import workspaceSlice from "./slice/workspaceSlice/workspaceSlice";
import documentSlice from "./slice/documentSlice/documentSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    user: userSlice,
    workspace: workspaceSlice,
    document: documentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

