import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: false,
  video: false,
  file: false,
};

const limitsSlice = createSlice({
  name: "limits",
  initialState,
  reducers: {
    limitReached(state, action) {
      state[action.payload] = true;
    },
  },
});

export const { limitReached } = limitsSlice.actions;
export default limitsSlice.reducer;
