import classes from "./PrimaryFooter.module.scss";
import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/icons/Logo";
import ContactSection from "../../ContactSection/ContactSection";
import { useLocation } from "react-router-dom";
import SocialMediaList from "../../UI/SocialMediaList";

const PrimaryFooter: React.FC = () => {
  const location = useLocation();

  return (
    <footer className={classes["primary-footer"]}>
      {location.pathname !== "/contact-me" && <ContactSection />}
      <div className={classes["primary-footer__bottom"]}>
        <div className="container">
          <nav className={classes["primary-footer__navigation"]}>
            <Link to="/" className={classes["primary-footer__logo-box"]}>
              <LogoIcon className={classes["primary-footer__logo"]} />
            </Link>
            <ul className={classes["primary-footer__list"]} role="list">
              <li className={classes["primary-footer__item"]}>
                <Link to="/" className={classes["primary-footer__link"]}>
                  accueil
                </Link>
              </li>
              <li className={classes["primary-footer__item"]}>
                <Link
                  to="/portfolio"
                  className={classes["primary-footer__link"]}
                >
                  portefeuille
                </Link>
              </li>
              <li className={classes["primary-footer__item"]}>
                <Link
                  to="/contact-me"
                  className={classes["primary-footer__link"]}
                >
                  contactez moi
                </Link>
              </li>
            </ul>
          </nav>
          <SocialMediaList />
        </div>
      </div>
    </footer>
  );
};

export default PrimaryFooter;
