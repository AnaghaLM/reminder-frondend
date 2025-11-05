import { configureStore } from "@reduxjs/toolkit";
import reminderReducer from "./slice/reminderSlice";

// Create Redux store
const store = configureStore({
  reducer: {
    reminders: reminderReducer,
  },
});

export default store;
