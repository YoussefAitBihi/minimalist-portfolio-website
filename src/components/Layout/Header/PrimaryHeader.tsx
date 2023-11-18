import PrimaryNavigation from "../Navigation/PrimaryNavigation";
import classes from "./PrimaryHeader.module.scss";

const PrimaryHeader = () => {
  return (
    <header className={`${classes["primary-header"]} container`}>
      <PrimaryNavigation />
    </header>
  );
};

export default PrimaryHeader;
