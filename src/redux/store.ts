import { configureStore } from "@reduxjs/toolkit";
import buildPCReducer from "./features/buildPC/buildPC";
import { api } from "./api/api";

const store = configureStore({
  reducer: {
    pcBuild: buildPCReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
