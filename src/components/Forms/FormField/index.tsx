import { FC } from "react";

type FormFiledProps = {
  field: "input" | "textarea";
  type?: "text" | "email" | "password";
  label: string;
  name: string;
  placeholder: string;
  value: string;
  customClass: string;
  onChange: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  errorMessage: string | null;
};

const FormField: FC<FormFiledProps> = (props) => {
  const inputId = `form-control-${self.crypto.randomUUID()}`;

  let formFieldContent = (
    <input
      className={`form-group__control ${props.customClass}`}
      id={inputId}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required
    />
  );

  if (props.field === "textarea") {
    formFieldContent = (
      <textarea
        className={`form-group__control form-group__control--textarea ${props.customClass}`}
        id={inputId}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
      ></textarea>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={inputId} className="form-group__label">
        {props.label}
      </label>
      {formFieldContent}
      {props.errorMessage && (
        <p className="form-group__error">{props.errorMessage}</p>
      )}
    </div>
  );
};

export default FormField;
