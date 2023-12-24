import { createSlice } from "@reduxjs/toolkit";

// type NotificationStatusDescriptor = "pending" | "failure" | "success";

export type StateDescriptor = {
  notification: {
    isShown: boolean;
    status: string;
    title: string;
    message: string;
  };
};

const initialState = {
  notification: {
    isShown: false,
    status: "",
    title: "",
    message: "",
  },
};

const uiSlice = createSlice({
  name: "ui-slice",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        isShown: true,
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
