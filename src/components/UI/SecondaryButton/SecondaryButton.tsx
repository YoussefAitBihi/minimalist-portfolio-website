import SecondaryButtonProps from "../../../types/SecondaryButtonProps";
import classes from "./SecondaryButton.module.scss";
import { Link } from "react-router-dom";

const SecondaryButton = ({
  text,
  href,
  buttonIsDisabled,
}: SecondaryButtonProps) => {
  return (
    <Link
      to={href}
      className={classes["secondary-button"]}
      aria-disabled={buttonIsDisabled}
    >
      {text}
    </Link>
  );
};

export default SecondaryButton;
