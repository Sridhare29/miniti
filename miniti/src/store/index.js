import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devtools: true,
});
export default store;

