import SecondaryButton from "../UI/SecondaryButton/SecondaryButton";
import classes from "./ContentSection.module.scss";
import { Button } from "../UI/SecondaryButton/SecondaryButton";
import AvatarDesktop from "../../assets/images/homepage/desktop/image-homepage-profile.jpg";
import AvatarTablet from "../../assets/images/homepage/tablet/image-homepage-profile.jpg";
import AvatarMobile from "../../assets/images/homepage/mobile/image-homepage-profile.jpg";

import AvatarDesktop2x from "../../assets/images/homepage/desktop/image-homepage-profile@2x.jpg";
import AvatarTablet2x from "../../assets/images/homepage/tablet/image-homepage-profile@2x.jpg";
import AvatarMobile2x from "../../assets/images/homepage/mobile/image-homepage-profile@2x.jpg";

type ContentSection = {
  id: string;
  title: string;
  button: Button;
  picture: {
    src: string;
    alt: string;
  };
  children: string;
};

const ContentSection = (props: ContentSection) => {
  return (
    <section
      className={classes["content-section"]}
      aria-labelledby="content-section-title"
      id={props.id}
    >
      <picture className={classes["content-section__picture"]}>
        <source
          media="(max-width: 767px)"
          srcSet={`${AvatarMobile} 1x, ${AvatarMobile2x} 2x`}
        />
        <source
          media="(max-width: 1120px)"
          srcSet={`${AvatarTablet} 1x, ${AvatarTablet2x} 2x`}
        />
        <source
          media="(min-width: 1121px)"
          srcSet={`${AvatarDesktop} 1x, ${AvatarDesktop2x} 2x`}
        />
        <img src={props.picture.src} alt={props.picture.alt} loading="lazy" />
      </picture>
      <div className={classes["content-section__infos"]}>
        <h2
          className={classes["content-section__title"]}
          id="content-section-title"
        >
          {props.title}
        </h2>
        <p className={classes["content-section__paragraph"]}>
          {props.children}
        </p>
        <SecondaryButton {...props.button}>
          aller à portefeuille
        </SecondaryButton>
      </div>
    </section>
  );
};

export default ContentSection;
