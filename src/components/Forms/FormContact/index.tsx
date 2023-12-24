import useFormContact from "../../../hooks/useFormContact";
import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";
import SpinnerLoading from "../../UI/SpinnerLoading/Spinner";
import FormField from "../FormField";

const FormContact = () => {
  const {
    formContactState: formState,
    handleInput,
    handleSubmit,
  } = useFormContact();

  return (
    <form className="form-contact" onSubmit={handleSubmit} method="post">
      <FormField
        field="input"
        type="text"
        label="Nom"
        name="name"
        placeholder="Youssef Ait Bihi"
        value={formState.name.value}
        onChange={handleInput}
        errorMessage={formState.name.errorMessage}
        customClass={
          formState.name.isValid === false
            ? "form-group__control--error"
            : formState.name.isValid
            ? "form-group__control--valid"
            : ""
        }
      />
      <FormField
        field="input"
        type="email"
        label="Adresse E-mail"
        name="email"
        placeholder="email@exemple.com"
        value={formState.email.value}
        onChange={handleInput}
        errorMessage={formState.email.errorMessage}
        customClass={
          formState.email.isValid === false
            ? "form-group__control--error"
            : formState.email.isValid === true
            ? "form-group__control--valid"
            : ""
        }
      />
      <FormField
        field="textarea"
        label="Message"
        name="message"
        placeholder="Comment puis-je vous aider?"
        value={formState.message.value}
        onChange={handleInput}
        errorMessage={formState.message.errorMessage}
        customClass={
          formState.message.isValid === false
            ? "form-group__control--error"
            : formState.message.isValid === true
            ? "form-group__control--valid"
            : ""
        }
      />
      <PrimaryButton
        tag={{ tagName: "button" }}
        disabled={!formState.formIsValid || formState.loading}
      >
        {formState.loading ? (
          <>
            <span>
              <SpinnerLoading />
            </span>
            <span>Envoi en cours...</span>
          </>
        ) : (
          "Envoyer le message"
        )}
      </PrimaryButton>
    </form>
  );
};

export default FormContact;
