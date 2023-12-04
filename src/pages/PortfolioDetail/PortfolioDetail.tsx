import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PortfolioItemProps from "../../types/PortfolioItemProps";
import PortfolioBackgroundSection from "../../components/PortfolioBackgroundSection/PortfolioBackgroundSection";
import SpinnerLoading from "../../components/UI/SpinnerLoading/Spinner";
import BriefContent from "../../components/BriefContent/BriefContent";
import PortfolioItemDetail from "../../components/PortfolioItemDetail/PortfolioItemDetail";
import PortfolioItemDetailWrapper from "../../components/PortfolioItemDetail/PortfolioItemDetailWrapper";
import PaginationNavigation from "../../components/Layout/PaginationNavigation";

const PortfolioDetailPage = () => {
  const { slug } = useParams();

  const initialPictureState = {
    desktop: {
      "1x": "",
      "2x": "",
    },
    tablet: {
      "1x": "",
      "2x": "",
    },
    mobile: {
      "1x": "",
      "2x": "",
    },
  };

  const initialPortfolioItemState = {
    isLoading: false,
    item: {
      id: "",
      title: "",
      description: "",
      longDescription: "",
      thumbnail: initialPictureState,
      hero: initialPictureState,
      firstPreview: initialPictureState,
      secondPreview: initialPictureState,
      technologies: [],
      projectURL: "",
      slug: "",
    },
  };

  const [portfolioItemState, setPortfolioItemState] = useState<{
    isLoading: boolean;
    item: PortfolioItemProps;
  }>(initialPortfolioItemState);

  useEffect(() => {
    const fetchPortfolioItem = async () => {
      setPortfolioItemState((prevPortfolioItemState) => {
        return {
          ...prevPortfolioItemState,
          isLoading: true,
        };
      });

      const response = await fetch("/data/projects.json");

      if (!response.ok) {
        throw new Error(
          "We're having trouble fetching this project. Try again"
        );
      }

      const data = await response.json();

      const dataArr: PortfolioItemProps[] = Object.values(data);

      const portfolioItem = dataArr.find((item) => item.slug === slug);

      setPortfolioItemState({
        isLoading: false,
        item: portfolioItem!,
      });
    };

    fetchPortfolioItem();
  }, [slug]);

  return (
    <>
      {portfolioItemState.isLoading && <SpinnerLoading />}
      {!portfolioItemState.isLoading && (
        <>
          <PortfolioBackgroundSection
            height="65dvh"
            picture={portfolioItemState.item.hero}
          >
            <h2 className="visually-hidden">{`${portfolioItemState.item.title}'s Hero Background`}</h2>
          </PortfolioBackgroundSection>
          <PortfolioItemDetailWrapper>
            <BriefContent
              title={portfolioItemState.item.title}
              description={portfolioItemState.item.description}
              technologies={portfolioItemState.item.technologies}
              projectURL={portfolioItemState.item.projectURL}
            />
            <PortfolioItemDetail
              longDescription={portfolioItemState.item.longDescription}
              picture={{
                firstPreview: portfolioItemState.item.firstPreview,
                secondPreview: portfolioItemState.item.secondPreview,
              }}
            />
          </PortfolioItemDetailWrapper>
          <PaginationNavigation currentSlug={portfolioItemState.item.slug} />
        </>
      )}
    </>
  );
};

export default PortfolioDetailPage;
