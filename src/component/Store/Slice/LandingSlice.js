//package import
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosSearch } from "../../Config/Config.js";
//data fetch
export const getUserData = createAsyncThunk("UserData", async () => {
  return axiosSearch.get(`/?results=10`);
});
//data handling
export const userDataReducer = createSlice({
  name: "userData",
  initialState: {
    userData: [],
    userDataLoading: false,
  },
  extraReducers: {
    [getUserData.pending]: (state, action) => {
      state.userDataLoading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.userDataLoading = false;
      console.log(action.payload.data.results);
      state.userData = action.payload.data.results;
      console.log(state.userData);
    },
    [getUserData.rejected]: (state, action) => {
      state.userDataLoading = false;
    },
  },
});
const userReducer = userDataReducer.reducer;
export default userReducer;
