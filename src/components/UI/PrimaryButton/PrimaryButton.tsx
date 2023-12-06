import { FC } from "react";
import classes from "./PrimaryButton.module.scss";
import { Link } from "react-router-dom";

type Button = {
  tag: {
    tagName: string;
    href?: string;
  };
  children: JSX.Element | string;
  disabled?: string;
};

const PrimaryButton: FC<Button> = (props) => {
  let buttonContent = (
    <button
      className={classes["primary-button"]}
      aria-disabled={props.disabled}
    >
      {props.children}
    </button>
  );

  if (props.tag.href && props.tag.tagName === "anchor") {
    buttonContent = (
      <a href={props.tag.href} className={classes["primary-button"]}>
        {props.children}
      </a>
    );
  }

  return buttonContent;
};

export default PrimaryButton;
