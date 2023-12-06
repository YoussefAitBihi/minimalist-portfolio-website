import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";
import FormField from "../FormField";

const FormContact = () => {
  return (
    <form className="form-contact">
      <FormField
        field="input"
        type="text"
        label="Nom"
        placeholder="Youssef Ait Bihi"
      />
      <FormField
        field="input"
        type="email"
        label="Adresse E-mail"
        placeholder="email@exemple.com"
      />
      <FormField
        field="textarea"
        label="Message"
        placeholder="Comment puis-je vous aider?"
      />
      <PrimaryButton tag={{ tagName: "button" }} disabled="true">
        Send message
      </PrimaryButton>
    </form>
  );
};

export default FormContact;
