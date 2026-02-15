import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appliedJobs: []  
};

const appliedJobsSlice = createSlice({
  name: "appliedJobs",
  initialState,
  reducers: {
    applyJob: (state, action) => {
      const job = action.payload;

      const alreadyApplied = state.appliedJobs.find(
        (item) => item.id === job.id
      );

      if (!alreadyApplied) {
        state.appliedJobs.push(job);
      }
    },

    removeJob: (state, action) => {
      const jobId = action.payload;

      state.appliedJobs = state.appliedJobs.filter(
        (job) => job.id !== jobId
      );
    }
  }
});

export const { applyJob, removeJob } = appliedJobsSlice.actions;
export default appliedJobsSlice.reducer;
