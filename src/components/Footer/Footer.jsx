import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="https://github.com/NAF-FLY/gym-execises-react-v2"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" className="social" />
          </a>
          <img src={Instagram} alt="" className="social" />
          <img src={Linkedin} alt="" className="social" />
        </div>
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="logo-f">
            <img src={Logo} alt="" />
          </div>
        </Link>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};
export default Footer;
