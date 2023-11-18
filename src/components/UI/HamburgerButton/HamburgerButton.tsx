import classes from "./HamburgerButton.module.scss";
import HamburgerIcon from "../../../assets/icons/Hamburger";
import CloseIcon from "../../../assets/icons/Close";
import { FC } from "react";

const HamburgerButton: FC<{
  onClick: () => void;
  navigationIsShown: boolean;
}> = (props) => {
  return (
    <button
      className={classes["hamburger-button"]}
      aria-expanded={props.navigationIsShown}
      aria-controls="primary-navigation-list"
      onClick={props.onClick}
    >
      <span className="visually-hidden">
        Click to {!props.navigationIsShown ? "open" : "close"} the navigation
      </span>
      {!props.navigationIsShown && <HamburgerIcon />}
      {props.navigationIsShown && <CloseIcon />}
    </button>
  );
};

export default HamburgerButton;
