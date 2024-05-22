import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./Slice/userDetailSlice";

const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
export default store;
