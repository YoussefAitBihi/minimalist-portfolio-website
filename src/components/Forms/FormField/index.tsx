import { FC } from "react";

type FormFiledProps = {
  field: "input" | "textarea";
  type?: "text" | "email" | "password";
  label: string;
  placeholder: string;
};

const FormField: FC<FormFiledProps> = (props) => {
  const inputId = `form-control-${self.crypto.randomUUID()}`;

  let formFieldContent = (
    <input
      type={props.type}
      className="form-group__control"
      id={inputId}
      placeholder={props.placeholder}
    />
  );

  if (props.field === "textarea") {
    formFieldContent = (
      <textarea
        className="form-group__control form-group__control--textarea"
        id={inputId}
        placeholder={props.placeholder}
      ></textarea>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={inputId} className="form-group__label">
        {props.label}
      </label>
      {formFieldContent}
      <p className="form-group__error">Entrer un texte valide</p>
    </div>
  );
};

export default FormField;
