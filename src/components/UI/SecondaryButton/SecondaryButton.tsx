import classes from "./SecondaryButton.module.scss";
import { Link } from "react-router-dom";

export type Button = {
  text: string;
  href: string;
  buttonIsDisabled?: boolean;
};

const SecondaryButton = ({ text, href, buttonIsDisabled }: Button) => {
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
