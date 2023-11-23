import SecondaryButton from "../UI/SecondaryButton/SecondaryButton";
import ContentSectionProps from "../../types/ContentSectionProps";

const ContentSection: React.FC<ContentSectionProps> = (props) => {
  return (
    <>
      <picture className="content-section__picture">
        <source
          media="(max-width: 767px)"
          srcSet={`${props.picture.mobile["1x"]} 1x, ${props.picture.mobile["2x"]} 2x`}
        />
        <source
          media="(max-width: 1120px)"
          srcSet={`${props.picture.tablet["1x"]} 1x, ${props.picture.tablet["2x"]} 2x`}
        />
        <source
          media="(min-width: 1121px)"
          srcSet={`${props.picture.desktop["1x"]} 1x, ${props.picture.desktop["2x"]} 2x`}
        />
        <img
          src={props.picture.desktop["1x"]}
          alt={`${props.title} picture`}
          loading="lazy"
        />
      </picture>
      <div className="content-section__infos">
        <h2 className="content-section__title" id="content-section-title">
          {props.title}
        </h2>
        <p className="content-section__paragraph">{props.children}</p>
        <SecondaryButton {...props.button}>{props.button.text}</SecondaryButton>
      </div>
    </>
  );
};

export default ContentSection;
