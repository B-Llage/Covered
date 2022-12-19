import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./Slices/FormSlice";

const store = configureStore({
  reducer: formSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
