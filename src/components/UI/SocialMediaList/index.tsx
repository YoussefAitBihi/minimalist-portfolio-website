import { Link } from "react-router-dom";
import GithubIcon from "../../../assets/icons/Github";
import TwitterIcon from "../../../assets/icons/Twitter";
import LinkedinIcon from "../../../assets/icons/Linkedin";

const SocialMediaList = () => {
  return (
    <ul className="social-media social-media--contact-page" role="list">
      <li className="social-media__item">
        <Link
          to="https://github.com/YoussefAitBihi"
          target="_blank"
          aria-label="Github"
        >
          <GithubIcon />
        </Link>
      </li>
      <li className="social-media__item">
        <Link
          to="https://twitter.com/ayt_bihi"
          target="_blank"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </Link>
      </li>
      <li className="social-media__item">
        <Link
          to="https://www.linkedin.com/in/youssef-ait-bihi-527944167/"
          target="_blank"
          aria-label="linkedin"
        >
          <LinkedinIcon />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMediaList;
