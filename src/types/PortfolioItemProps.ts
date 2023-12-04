import PictureProps from "./PictureProps";

type PortfolioItemProps = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: PictureProps;
  hero: PictureProps;
  firstPreview: PictureProps;
  secondPreview: PictureProps;
  projectURL: string;
  slug: string;
  technologies: string[];
};

export default PortfolioItemProps;
