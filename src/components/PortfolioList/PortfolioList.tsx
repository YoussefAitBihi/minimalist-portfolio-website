import { FC } from "react";
import PortfolioItemProps from "../../types/PortfolioItemProps";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

const PortfolioList: FC<{ items: PortfolioItemProps[] }> = ({ items }) => {
  return (
    <ul className="portfolio-list" role="list">
      {items.map((item, index) => (
        <li className="portfolio-list__item">
          <PortfolioItem item={item} index={index} key={item.id} />
        </li>
      ))}
    </ul>
  );
};

export default PortfolioList;
