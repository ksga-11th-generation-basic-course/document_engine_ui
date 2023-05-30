import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./slice/authenticationSlice/authenticationSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
