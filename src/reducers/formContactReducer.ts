// import {
//   isEmailValid,
//   isFormInputNameOrMessageValid,
// } from "../helpers/formValidation";

// type ActionDescriptor = {
//   type: string;
//   val: string;
// };

// type FormFieldStateDescriptor = {
//   value: string;
//   isValid: boolean;
//   errorMessage: string | null;
// };

// type StateDescriptor = {
//   name: FormFieldStateDescriptor;
//   email: FormFieldStateDescriptor;
//   message: FormFieldStateDescriptor;
//   formIsValid: boolean;
// };

// export enum FormAction {
//   INPUT_NAME_BLUR = "INPUT_NAME_BLUR",
//   INPUT_EMAIL_BLUR = "INPUT_EMAIL_BLUR",
//   INPUT_MESSAGE_BLUR = "INPUT_MESSAGE_BLUR",
// }

// const formContactReducer = (
//   state: StateDescriptor,
//   action: ActionDescriptor
// ) => {
//   // Different Actions
//   switch (action.type) {
//     case FormAction.INPUT_NAME_BLUR: {
//       return {
//         ...state,
//         name: {
//           value: action.val,
//           isValid: isFormInputNameOrMessageValid(action.val),
//           errorMessage: !isFormInputNameOrMessageValid(action.val)
//             ? "Veuillez insérer un nom"
//             : null,
//         },
//         formIsValid:
//           isFormInputNameOrMessageValid(action.val) &&
//           state.email.isValid &&
//           state.message.isValid,
//       };
//     }

//     case FormAction.INPUT_EMAIL_BLUR: {
//       return {
//         ...state,
//         email: {
//           value: action.val,
//           isValid: isEmailValid(action.val),
//           errorMessage: !isEmailValid(action.val)
//             ? "Veuillez insérer un email valide"
//             : null,
//         },
//         formIsValid:
//           state.name.isValid &&
//           isEmailValid(action.val) &&
//           state.message.isValid,
//       };
//     }

//     case FormAction.INPUT_MESSAGE_BLUR: {
//       return {
//         ...state,
//         message: {
//           value: action.val,
//           isValid: isFormInputNameOrMessageValid(action.val),
//           errorMessage: !isFormInputNameOrMessageValid(action.val)
//             ? "Veuillez insérer un message"
//             : null,
//         },
//         formIsValid:
//           state.name.isValid &&
//           state.email.isValid &&
//           isFormInputNameOrMessageValid(action.val),
//       };
//     }

//     default: {
//       throw new Error(`Unknown Type ${action.type}`);
//     }
//   }
// };

// export default formContactReducer;
