import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import buildPCReducer from "./features/buildPC/buildPC";

const store = configureStore({
  reducer: {
    buildPC: buildPCReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
