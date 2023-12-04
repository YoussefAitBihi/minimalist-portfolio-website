import { FC } from "react";
import PortfolioItemDetailPictureProps from "../../types/PortfolioItemDetailPictureProps";

type PortfolioItemDetailProps = {
  longDescription: string;
  picture: PortfolioItemDetailPictureProps;
};

const PortfolioItemDetail: FC<PortfolioItemDetailProps> = ({
  longDescription,
  picture,
}) => {
  return (
    <div className="portfolio-item-detail">
      <section
        className="section-portfolio-item"
        aria-labelledby="project-background-title"
      >
        <h3
          className="section-portfolio-item__title"
          id="project-background-title"
        >
          Project Background
        </h3>
        <p className="section-portfolio-item__description">{longDescription}</p>
      </section>
      <section
        className="section-portfolio-item"
        aria-labelledby="project-preview-title"
      >
        <h3
          className="section-portfolio-item__title"
          id="project-preview-title"
        >
          Static preview
        </h3>
        <picture className="section-portfolio-item__picture">
          <source
            media="(max-width: 767px)"
            srcSet={`${picture.firstPreview.mobile["1x"]} 1x, ${picture.firstPreview.mobile["2x"]} 2x`}
          />
          <source
            media="(max-width: 1120px)"
            srcSet={`${picture.firstPreview.tablet["1x"]} 1x, ${picture.firstPreview.tablet["2x"]} 2x`}
          />
          <source
            media="(min-width: 1121px)"
            srcSet={`${picture.firstPreview.desktop["1x"]} 1x, ${picture.firstPreview.desktop["2x"]} 2x`}
          />
          <img
            src={picture.firstPreview.desktop["1x"]}
            alt="The first Preview Image"
            loading="lazy"
          />
        </picture>

        <picture className="section-portfolio-item__picture">
          <source
            media="(max-width: 767px)"
            srcSet={`${picture.secondPreview.mobile["1x"]} 1x, ${picture.secondPreview.mobile["2x"]} 2x`}
          />
          <source
            media="(max-width: 1120px)"
            srcSet={`${picture.secondPreview.tablet["1x"]} 1x, ${picture.secondPreview.tablet["2x"]} 2x`}
          />
          <source
            media="(min-width: 1121px)"
            srcSet={`${picture.secondPreview.desktop["1x"]} 1x, ${picture.secondPreview.desktop["2x"]} 2x`}
          />
          <img
            src={picture.secondPreview.desktop["1x"]}
            alt="The second Preview Image"
            loading="lazy"
          />
        </picture>
      </section>
    </div>
  );
};

export default PortfolioItemDetail;
