import classes from "./PrimaryFooter.module.scss";
import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/icons/Logo";
import GithubIcon from "../../../assets/icons/Github";
import TwitterIcon from "../../../assets/icons/Twitter";
import LinkedinIcon from "../../../assets/icons/Linkedin";
import ContactSection from "../../ContactSection/ContactSection";

const PrimaryFooter: React.FC = () => {
  return (
    <footer className={classes["primary-footer"]}>
      <ContactSection />
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

          <ul
            className={classes["primary-footer__social-media-list"]}
            role="list"
          >
            <li className={classes["primary-footer__social-media-item"]}>
              <Link
                to="https://github.com/YoussefAitBihi"
                className={classes["primary-footer__social-media-link"]}
                target="_blank"
              >
                <GithubIcon />
              </Link>
            </li>
            <li className={classes["primary-footer__social-media-item"]}>
              <Link
                to="https://twitter.com/ayt_bihi"
                className={classes["primary-footer__social-media-link"]}
                target="_blank"
              >
                <TwitterIcon />
              </Link>
            </li>
            <li className={classes["primary-footer__social-media-item"]}>
              <Link
                to="https://www.linkedin.com/in/youssef-ait-bihi-527944167/"
                className={classes["primary-footer__social-media-link"]}
                target="_blank"
              >
                <LinkedinIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default PrimaryFooter;
