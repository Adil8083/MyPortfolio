import { configureStore } from "@reduxjs/toolkit";
import navClickReducer from "../src/features/navClick";
export const store = configureStore({
  reducer: {
    navClick: navClickReducer,
  },
});
