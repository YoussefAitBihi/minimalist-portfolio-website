import { FC } from "react";
import classes from "./PrimaryButton.module.scss";

type Button = {
  tag: {
    tagName: string;
    href?: string;
  };
  children: JSX.Element;
};

const PrimaryButton: FC<Button> = (props) => {
  let buttonContent = (
    <button className={classes["primary-button"]}>{props.children}</button>
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
