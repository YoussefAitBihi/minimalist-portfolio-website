import { Link, NavLink } from "react-router-dom";
import LogoIcon from "../../../assets/icons/Logo";
import classes from "./PrimaryNavigation.module.scss";
import HamburgerButton from "../../UI/HamburgerButton/HamburgerButton";
import { useState } from "react";

const PrimaryNavigation = () => {
  const [navigationIsShown, setNavigationIsShown] = useState(true);

  const toggleNavigationHandler = () => {
    setNavigationIsShown((prevNavigationState) => !prevNavigationState);
  };

  const activeLinkHandler = ({ isActive }: { isActive: boolean }) => {
    const linkClasses = isActive
      ? `${classes["primary-navigation__link"]} ${classes["primary-navigation__link--active"]}`
      : `${classes["primary-navigation__link"]}`;

    return linkClasses;
  };

  return (
    <nav
      className={classes["primary-navigation"]}
      aria-label="Primary Navigation"
    >
      <Link to="/" className={classes["primary-navigation__logo"]}>
        <span className="visually-hidden">Go to homepage</span>
        <LogoIcon />
      </Link>
      <HamburgerButton
        navigationIsShown={navigationIsShown}
        onClick={toggleNavigationHandler}
      />
      <ul
        className={classes["primary-navigation__list"]}
        id="primary-navigation-list"
        role="list"
      >
        <li className={classes["primary-navigation__item"]}>
          <NavLink to="/" className={activeLinkHandler}>
            accueil
          </NavLink>
        </li>
        <li className={classes["primary-navigation__item"]}>
          <NavLink to="/portfolio" className={activeLinkHandler}>
            portefeuille
          </NavLink>
        </li>
        <li className={classes["primary-navigation__item"]}>
          <NavLink to="/contact-me" className={activeLinkHandler}>
            contactez moi
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNavigation;
