import PrimaryNavigation from "../Navigation/PrimaryNavigation";
import { useLocation } from "react-router-dom";

const PrimaryHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <header
      className={`primary-header ${
        pathname !== "/" ? "primary-header--margin-bottom" : ""
      } container`}
    >
      <PrimaryNavigation />
    </header>
  );
};

export default PrimaryHeader;
