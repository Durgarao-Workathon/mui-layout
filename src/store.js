import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./redux/darkmode/modeSlice";
// import logger from "redux-logger";

export default configureStore({
  reducer: {
    mode: modeReducer,
  },
});
