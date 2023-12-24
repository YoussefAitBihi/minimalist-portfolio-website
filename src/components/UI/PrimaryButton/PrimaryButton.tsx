import { FC } from "react";
import classes from "./PrimaryButton.module.scss";

type Button = {
  tag: {
    tagName: string;
    href?: string;
  };
  children: React.ReactNode;
  disabled?: boolean;
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
