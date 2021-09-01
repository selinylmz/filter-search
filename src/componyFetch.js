import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "companyData",
  initialState: {
    value: [],
  },
  reducers: {
    getCompany: (state) => {
      fetch("https://5f7335deb63868001615f557.mockapi.io/list")
        .then((response) => response.json())
        .then((data) => {
          state = data;
          // state.value.push(data)
        });
    },
  },
});

export const { getCompany } = slice.actions;
export const selectData = (state) => state.companyData.value;

export default slice.reducer;
