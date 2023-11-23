import classes from "./IntroductionSection.module.scss";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import ArrowDownIcon from "../../assets/icons/ArrowDown";

type IntroductionSectionProps = {
  title: string;
};

const IntroductionSection: React.FC<IntroductionSectionProps> = (props) => {
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
          {props.title}
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
