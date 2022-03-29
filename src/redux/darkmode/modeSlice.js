import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: false,
  },
  reducers: {
    light: (state) => {
      state.mode = false;
    },
    dark: (state) => {
      state.mode = true;
    },
  },
});

export const { light, dark } = modeSlice.actions;

export default modeSlice.reducer;
