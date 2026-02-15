import { configureStore } from "@reduxjs/toolkit";
import appliedJobsReducer from "./slicer";

const store = configureStore({
  reducer: {
    appliedJobs: appliedJobsReducer
  }
});

export default store;
