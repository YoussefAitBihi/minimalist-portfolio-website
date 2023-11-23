import { useState, useEffect } from "react";
import SpinnerLoading from "../../components/UI/SpinnerLoading/Spinner";
import PortfolioList from "../../components/PortfolioList/PortfolioList";
import TitleForAssistiveTechnologies from "../../components/TitleForAssistiveTechnologies/TitleForAssistiveTechnologies";

const PortfolioPage = () => {
  const initialPortfolioState = {
    items: [],
    isLoading: false,
  };

  const [portfolioState, setPortfolioState] = useState(initialPortfolioState);

  useEffect(() => {
    const fetchProjects = async () => {
      setPortfolioState((prevPortfolioState) => {
        return {
          ...prevPortfolioState,
          isLoading: true,
        };
      });

      const response = await fetch("/data/projects.json");

      if (!response.ok) {
        throw new Error(
          "There was a problem during sending the request. Try again!"
        );
      }
      const data = await response.json();

      setPortfolioState({
        items: Object.values(data),
        isLoading: false,
      });
    };

    fetchProjects();
  }, []);

  return (
    <>
      <TitleForAssistiveTechnologies title="Portfolio Page" />
      {portfolioState.isLoading && <SpinnerLoading />}
      {!portfolioState.isLoading && portfolioState.items.length > 0 && (
        <PortfolioList items={portfolioState.items} />
      )}
    </>
  );

  return <div></div>;
};

export default PortfolioPage;
