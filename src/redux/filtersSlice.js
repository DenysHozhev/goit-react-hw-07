import { createSlice } from "@reduxjs/toolkit";

const FiltersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    tel: null,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = FiltersSlice.actions;

export default FiltersSlice.reducer;

export const selectNameFilter = (state) => state.filters.name;
