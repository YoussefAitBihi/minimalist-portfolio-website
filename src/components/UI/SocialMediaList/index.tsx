import { Link } from "react-router-dom";
import GithubIcon from "../../../assets/icons/Github";
import TwitterIcon from "../../../assets/icons/Twitter";
import LinkedinIcon from "../../../assets/icons/Linkedin";

const SocialMediaList = () => {
  return (
    <ul className="social-media social-media--contact-page" role="list">
      <li className="social-media__item">
        <Link to="https://github.com/YoussefAitBihi" target="_blank">
          <GithubIcon />
        </Link>
      </li>
      <li className="social-media__item">
        <Link to="https://twitter.com/ayt_bihi" target="_blank">
          <TwitterIcon />
        </Link>
      </li>
      <li className="social-media__item">
        <Link
          to="https://www.linkedin.com/in/youssef-ait-bihi-527944167/"
          target="_blank"
        >
          <LinkedinIcon />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMediaList;
