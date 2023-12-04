import { FC } from "react";

const PortfolioItemDetailWrapper: FC<{ children: JSX.Element[] }> = ({
  children,
}) => {
  return <div className="portfolio-item-wrapper">{children}</div>;
};

export default PortfolioItemDetailWrapper;
