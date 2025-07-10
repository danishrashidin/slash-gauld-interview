import { configureStore } from "@reduxjs/toolkit";
import issuesSlice from "./slices/issues";

export const store = configureStore({
  reducer: {
    issuesSlice,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
