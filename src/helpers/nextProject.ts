import PortfolioItemProps from "../types/PortfolioItemProps";

/**
 * Used to retrieve the next project
 * @param currentSlug
 * @param projects
 * @returns
 */
const nextProjectHandler = (
  currentSlug: string,
  projects: PortfolioItemProps[]
) => {
  const currentProjectIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  );

  const nextProjectIndex =
    currentProjectIndex === projects.length - 1 ? 0 : currentProjectIndex + 1;

  const nextProject = {
    title: projects[nextProjectIndex].title,
    slug: projects[nextProjectIndex].slug,
  };

  return nextProject;
};

export default nextProjectHandler;
