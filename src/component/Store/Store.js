import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userDataReducer from "./Slice/LandingSlice";

const rootReducer = combineReducers({
  userDataInfo: userDataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
