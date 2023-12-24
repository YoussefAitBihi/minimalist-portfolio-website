import { Dispatch } from "@reduxjs/toolkit";
import { formContactActions } from "./form-contact-slice";
import { uiActions } from "./ui-slice";
import { EmailAPI } from "../config/constants";
import emailjs from "@emailjs/browser";

type SendEmailParams = {
  name: string;
  email: string;
  message: string;
};

export const sendEmail = ({ name, email, message }: SendEmailParams) => {
  return async (dispatch: Dispatch) => {
    const handleSendEmail = async () => {
      dispatch(formContactActions.loading());
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Envoi en cours...",
          message: "Votre message est en cours d'envoi",
        })
      );

      await emailjs.send(
        "Hello World", // EmailAPI.SERVICE_ID,
        "Hello World", // EmailAPI.TEMPLATE_ID,
        { name, email, message },
        "Hello World" // EmailAPI.PUBLIC_KEY
      );

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Votre message a été envoyé avec succès.",
        })
      );
      dispatch(formContactActions.init());
    };

    try {
      await handleSendEmail();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "failure",
          title: "Echec",
          message:
            "Nous avons échoué d'envoyer le message. Vérifier votre connexion internet",
        })
      );
      dispatch(formContactActions.loading());
    }
  };
};
