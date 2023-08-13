import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const navClick = createSlice({
  name: "navClick",
  initialState,
  reducers: {
    toggleClick: (state) => {
      if (state.value) {
        state.value = false;
      } else {
        state.value = true;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleClick } = navClick.actions;

export default navClick.reducer;
