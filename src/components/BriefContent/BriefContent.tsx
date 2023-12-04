import { FC } from "react";
import SecondaryButton from "../UI/SecondaryButton/SecondaryButton";

type BriefContentProps = {
  title: string;
  description: string;
  technologies: string[];
  projectURL: string;
};

const BriefContent: FC<BriefContentProps> = ({
  title,
  description,
  technologies,
  projectURL,
}) => {
  return (
    <div className="brief-content">
      <h2 className="brief-content__title">{title}</h2>
      <p className="brief-content__description">{description}</p>
      <ul className="brief-content__technologies" role="list">
        {technologies.map((technology) => (
          <li className="brief-content__technology">{technology}</li>
        ))}
      </ul>
      <SecondaryButton text="visit website" href={projectURL} />
    </div>
  );
};

export default BriefContent;
