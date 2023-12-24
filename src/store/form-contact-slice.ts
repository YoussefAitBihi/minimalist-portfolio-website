import { createSlice } from "@reduxjs/toolkit";
import {
  isEmailValid,
  isFormInputNameOrMessageValid,
} from "../helpers/formValidation";

type FormFieldStateDescriptor = {
  value: string;
  isValid: boolean | null;
  errorMessage: string | null;
};

export type StateDescriptor = {
  name: FormFieldStateDescriptor;
  email: FormFieldStateDescriptor;
  message: FormFieldStateDescriptor;
  formIsValid: boolean | null;
  loading: boolean;
};

type ActionDescriptor = {
  type: string;
  payload: string;
};

const initialFormField = {
  value: "",
  isValid: null,
  errorMessage: null,
};

const initialState = {
  name: initialFormField,
  email: initialFormField,
  message: initialFormField,
  formIsValid: null,
  loading: false,
};

const formContactSlice = createSlice({
  name: "form-contact",
  initialState,
  reducers: {
    handleInputName(state: StateDescriptor, action: ActionDescriptor) {
      (state.name.value = action.payload),
        (state.name.isValid = isFormInputNameOrMessageValid(action.payload)),
        (state.name.errorMessage = !isFormInputNameOrMessageValid(
          action.payload
        )
          ? "Veuillez insérer un nom"
          : null),
        (state.formIsValid =
          isFormInputNameOrMessageValid(action.payload) &&
          state.email.isValid &&
          state.message.isValid);
    },
    handleInputEmail(state: StateDescriptor, action: ActionDescriptor) {
      (state.email.value = action.payload),
        (state.email.isValid = isEmailValid(action.payload)),
        (state.email.errorMessage = !isEmailValid(action.payload)
          ? "Veuillez insérer un email valide"
          : null),
        (state.formIsValid =
          isEmailValid(action.payload) &&
          state.name.isValid &&
          state.message.isValid);
    },
    handleInputMessage(state: StateDescriptor, action: ActionDescriptor) {
      (state.message.value = action.payload),
        (state.message.isValid = isFormInputNameOrMessageValid(action.payload)),
        (state.message.errorMessage = !isFormInputNameOrMessageValid(
          action.payload
        )
          ? "Veuillez insérer un message"
          : null),
        (state.formIsValid =
          isFormInputNameOrMessageValid(action.payload) &&
          state.name.isValid &&
          state.email.isValid);
    },
    loading(state: StateDescriptor) {
      state.loading = !state.loading;
    },
    init(state: StateDescriptor) {
      state.name = initialFormField;
      state.email = initialFormField;
      state.message = initialFormField;
      state.formIsValid = false;
      state.loading = false;
    },
  },
});

export const formContactActions = formContactSlice.actions;
export const formContactReducer = formContactSlice.reducer;

// DONE: Change the button submit state when the message in progress (envoi en cours).
// DONE: When the message was sent change again the submit state (envoyé).
// DONE: Show a notification when the message is pending/failed/success.

// TODO: Render all images using img tag instead of background.
// TODO: Add a CV Link to my CV
// TODO: Modify the container
// TODO: Change the structure of the folder
// TODO: Separate the action creator in a separate file
// TODO: Manage the state of navigation and notification in a separate slice.
// TODO: Remove the css modules.
// TODO: Add a not found page.
// TODO: Deploy the PORTFOLIO.
