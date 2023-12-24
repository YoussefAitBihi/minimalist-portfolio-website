import { FormEvent } from "react";
import {
  StateDescriptor,
  formContactActions,
} from "../store/form-contact-slice";
import { sendEmail } from "../store/send-email-action";
import { useDispatch, useSelector } from "react-redux";

const useFormContact = () => {
  const formContactState = useSelector(
    (state: { formContact: StateDescriptor }) => state.formContact
  );
  const dispatch = useDispatch();

  const handleInput = (event: React.FocusEvent<HTMLInputElement>) => {
    // Recover the value depends on the name
    const name = event.target.name;
    // Check whether the input valid or not

    switch (name) {
      case "name":
        dispatch(formContactActions.handleInputName(event.target.value));
        break;

      case "email":
        dispatch(formContactActions.handleInputEmail(event.target.value));
        break;

      case "message":
        dispatch(formContactActions.handleInputMessage(event.target.value));
        break;

      default: {
        throw new Error(`Unknown Name ${name}`);
      }
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!formContactState.formIsValid) return;

    dispatch(
      sendEmail({
        name: formContactState.name.value,
        email: formContactState.email.value,
        message: formContactState.message.value,
      })
    );
  };

  return {
    formContactState,
    handleInput,
    handleSubmit,
  };
};

export default useFormContact;
