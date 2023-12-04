import styled from "styled-components";
import PictureProps from "../../types/PictureProps";

export type PortfolioBgProps = {
  height: "65dvh" | "50dvh";
  picture: PictureProps;
};

const PortfolioBackgroundSection = styled.section<PortfolioBgProps>`
  height: ${(props) => props.height};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${(props) => props.picture.mobile["1x"]});

  @media (min-width: 48em) {
    background-image: url(${(props) => props.picture.tablet["1x"]});
  }

  @media (min-width: 90em) {
    background-image: url(${(props) => props.picture.desktop["1x"]});
  }

  @media (min-resolution: 192dpi) and (max-width: 47.9375em) {
    background-image: url(${(props) => props.picture.mobile["2x"]});
  }

  @media (min-resolution: 192dpi) and (min-width: 48em) {
    background-image: url(${(props) => props.picture.tablet["2x"]});
  }

  @media (min-resolution: 192dpi) and (min-width: 90em) {
    background-image: url(${(props) => props.picture.desktop["2x"]});
  }
`;

export default PortfolioBackgroundSection;
