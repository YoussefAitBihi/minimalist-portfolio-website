import PictureProps from "./PictureProps";
import SecondaryButtonProps from "./SecondaryButtonProps";

type ContentSectionProps = {
  id: string;
  title: string;
  button: SecondaryButtonProps;
  picture: PictureProps;
  children: string;
};

export default ContentSectionProps;
