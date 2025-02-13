import { configureStore } from "@reduxjs/toolkit";
import filesReducer from "./filesSlice";
import limitsReducer from "./limitsSlice";

const store = configureStore({
  reducer: {
    files: filesReducer,
    limits: limitsReducer,
  },
});

export default store;
