import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  user: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = "data";
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = [];
      localStorage.clear()
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { login, logout, incrementByAmount } = UserSlice.actions;

export default UserSlice.reducer;
