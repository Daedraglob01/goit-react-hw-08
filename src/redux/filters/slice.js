import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  number: null,
  isLoading: false,
  isError: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      if (payload.name !== undefined) {
        state.name = payload.name;
      }
      if (payload.number !== undefined) {
        state.number = payload.number;
      }
    },
  },
});


export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;


export const selectNameFilter = (state) => state.filters.name;
export const selectNumberFilter = (state) => state.filters.number;