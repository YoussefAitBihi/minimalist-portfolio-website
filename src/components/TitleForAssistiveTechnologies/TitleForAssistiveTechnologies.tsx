import { FC } from "react";

const TitleForAssistiveTechnologies: FC<{ title: string }> = ({ title }) => {
  return <h1 className="visually-hidden">{title}</h1>;
};

export default TitleForAssistiveTechnologies;
