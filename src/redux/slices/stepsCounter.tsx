import { createSlice } from "@reduxjs/toolkit";

export const stepCounterSlice = createSlice({
  name: "stepCounter",
  initialState: {
    step: 0,
  },
  reducers: {
    stepCount: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { stepCount } = stepCounterSlice.actions;
export default stepCounterSlice.reducer;
