import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "person",
  initialState: [],
  reducers: {
    add: (state, action) => {
      return [...state, action.payload];
    },
    addMany: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const personActions = actions;
export const personReducer = reducer;
