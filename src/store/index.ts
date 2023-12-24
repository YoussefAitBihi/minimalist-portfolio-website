// TODO: Review Redux
// TODO: Manage wide-state using Redux and Redux Toolkit
// TODO: Send email
// TODO: Some enhancement in our project
// TODO: Deploy

import { configureStore } from "@reduxjs/toolkit";
import { formContactReducer } from "./form-contact-slice";
import { uiReducer } from "./ui-slice";

const store = configureStore({
  reducer: {
    formContact: formContactReducer,
    ui: uiReducer,
  },
});

export default store;
