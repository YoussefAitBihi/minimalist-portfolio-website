import { Link } from "react-router-dom";
import { FC } from "react";
import ArrowLeftIcon from "../../assets/icons/ArrowLeft";
import ArrowRightIcon from "../../assets/icons/ArrowRight";

type ProjectLinkProps = {
  title: string;
  goTo: "previous" | "next";
  projectURL: string;
};

const ProjectLink: FC<ProjectLinkProps> = (props) => {
  return (
    <Link
      to={`/portfolio/${props.projectURL}`}
      className={`project-link ${
        props.goTo === "next" ? "project-link--right-to-left" : null
      }`}
      aria-label={`Click to go to ${props.title} project`}
    >
      <div className="project-link__icon">
        {props.goTo === "previous" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      </div>
      <div className="project-link__details">
        <h4 className="project-link__title">{props.title}</h4>
        <p className="project-link__text">
          {props.goTo === "previous" ? "Previous Project" : "Next Project"}
        </p>
      </div>
    </Link>
  );
};

export default ProjectLink;
