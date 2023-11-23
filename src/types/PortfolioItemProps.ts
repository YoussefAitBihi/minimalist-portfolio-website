import PictureProps from "./PictureProps";

type PortfolioItemProps = {
  id: string;
  title: string;
  description: string;
  picture: PictureProps;
  slug: string;
  technologies: string[];
};

export default PortfolioItemProps;
