import classes from "./Portfolio.module.scss";
import { useState, useEffect } from "react";

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/src/utils/projects.json");

      if (!response) {
        throw new Error(
          "There was a problem during sending the request. Try again!"
        );
      }

      const data = await response.json();
      setProjects(Object.values(data));
    };

    fetchProjects();
  }, []);

  return (
    <ul className={classes["portfolio-list"]} role="list">
      <li className={classes["portfolio-list__item"]}>
        <article></article>
      </li>
    </ul>
  );
};

export default PortfolioPage;
