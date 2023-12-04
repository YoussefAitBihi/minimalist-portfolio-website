import PortfolioItemProps from "../../types/PortfolioItemProps";
import ContentSection from "../ContentSection/ContentSection";

const PortfolioItem: React.FC<{ item: PortfolioItemProps; index: number }> = ({
  item,
  index,
}) => {
  return (
    <article
      className={`content-section content-section--margin-bottom-lg ${
        index % 2 === 1 ? "content-section--infos-left" : ""
      }`}
    >
      <ContentSection
        id={item.id}
        title={item.title}
        button={{
          text: "view project",
          href: `/portfolio/${item.slug}`,
        }}
        picture={{
          desktop: {
            "1x": `${item.thumbnail.desktop["1x"]}`,
            "2x": `${item.thumbnail.desktop["2x"]}`,
          },
          tablet: {
            "1x": `${item.thumbnail.tablet["1x"]}`,
            "2x": `${item.thumbnail.tablet["2x"]}`,
          },
          mobile: {
            "1x": `${item.thumbnail.mobile["1x"]}`,
            "2x": `${item.thumbnail.mobile["2x"]}`,
          },
        }}
      >
        {item.description}
      </ContentSection>
    </article>
  );
};

export default PortfolioItem;
