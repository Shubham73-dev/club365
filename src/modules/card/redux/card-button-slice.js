import { createSlice } from "@reduxjs/toolkit";

export const cardButtonSlice = createSlice({
  name: "cardButtons",
  initialState: {
    buttons: {},
  },
  reducers: {
    addstat: (state, action) => {
        state.buttons[action.payload.id] = true;
    },
    removestat: (state, action) => {
        state.buttons[action.payload.id] = false;
    },
  },
});

export const { addstat, removestat } = cardButtonSlice.actions;

export default cardButtonSlice.reducer;
