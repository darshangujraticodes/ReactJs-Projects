import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: 1,
};

const reduxPracticeSlice = createSlice({
  name: "ReduxPractice",
  initialState,
  reducers: {
    addCounter: (state, action) => {
      state.data += 1;
    },

    subtractCounter: (state, action) => {
      if (state.data > 1) {
        state.data -= 1;
      }
    },
    fiveMultiple: (state, action) => {
      if (state.data > 0) {
        state.data *= 5;
      }
    },

    setNewVal: (state, action) => {
      state.data = action.payload;
    },

    setDouble: (state, action) => {
      state.data *= 2;
    },

    resetData: (state, action) => {
      state.data = 1;
    },
  },
});

export const {
  addCounter,
  subtractCounter,
  fiveMultiple,
  setNewVal,
  resetData,
  setDouble,
} = reduxPracticeSlice.actions;

export default reduxPracticeSlice.reducer;
