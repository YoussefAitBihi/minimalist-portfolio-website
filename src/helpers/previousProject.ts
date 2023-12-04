import PortfolioItemProps from "../types/PortfolioItemProps";

/**
 * Used to retrieve the previous project
 * @param currentSlug
 * @param projects
 * @returns
 */
const previousProjectHandler = (
  currentSlug: string,
  projects: PortfolioItemProps[]
) => {
  const currentProjectIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  );

  const previousProjectIndex =
    currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1;

  const previousProject = {
    title: projects[previousProjectIndex].title,
    slug: projects[previousProjectIndex].slug,
  };

  return previousProject;
};

export default previousProjectHandler;
