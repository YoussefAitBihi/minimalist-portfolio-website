import ProjectLink from "../../ProjectLink";
import nextProjectHandler from "../../../helpers/nextProject";
import previousProjectHandler from "../../../helpers/previousProject";
import { FC, useEffect, useState } from "react";

const PaginationNavigation: FC<{ currentSlug: string }> = ({ currentSlug }) => {
  type projectDescriptor = {
    title: string;
    slug: string;
  };

  const [nextProject, setNextProject] = useState<projectDescriptor>();
  const [previousProject, setPreviousProject] = useState<projectDescriptor>();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/data/projects.json");

      if (!response.ok) throw new Error("Something was wrong");

      const data = await response.json();

      const nextProjectData = nextProjectHandler(currentSlug, data);
      const previousProjectData = previousProjectHandler(currentSlug, data);

      setPreviousProject(previousProjectData);
      setNextProject(nextProjectData);
    };

    fetchProjects();
  }, [currentSlug]);

  return (
    previousProject &&
    nextProject && (
      <nav className="pagination-navigation" aria-label="Pagination">
        <ProjectLink
          title={previousProject.title}
          goTo="previous"
          projectURL={previousProject.slug}
        />
        <div className="pagination-navigation__divider"></div>
        <ProjectLink
          title={nextProject.title}
          goTo="next"
          projectURL={nextProject?.slug}
        />
      </nav>
    )
  );
};

export default PaginationNavigation;
