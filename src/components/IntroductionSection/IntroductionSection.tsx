import classes from "./IntroductionSection.module.scss";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import ArrowDownIcon from "../../assets/icons/ArrowDown";

const IntroductionSection = () => {
  return (
    <section
      aria-labelledby="section-introduction-title"
      className={classes["section-introduction"]}
    >
      <div className={classes["section-introduction__bg"]}></div>
      <div className={classes["section-introduction__introduce"]}>
        <h1
          className={classes["section-introduction__title"]}
          id="section-introduction-title"
        >
          Hey, Je suis Youssef Ait Bihi, un développeur front spécialisé dans
          React/Next.
        </h1>
        <PrimaryButton
          tag={{
            tagName: "anchor",
            href: "#about-me",
          }}
        >
          <>
            <span>
              <ArrowDownIcon />
            </span>
            <span>A propos de moi</span>
          </>
        </PrimaryButton>
      </div>
    </section>
  );
};

export default IntroductionSection;
