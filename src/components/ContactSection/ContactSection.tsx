import SecondaryButton from "../UI/SecondaryButton/SecondaryButton";
import classes from "./ContactSection.module.scss";

const ContactSection = () => {
  return (
    <div className={`${classes["contact-section"]} container`}>
      <h2 className={classes["contact-section__title"]}>
        Etes-vous intéressés à créer un projet ensemble?
      </h2>
      <div className={classes["contact-section__divider"]}></div>
      <SecondaryButton href="/contact-me" text="contact me" />
    </div>
  );
};

export default ContactSection;
