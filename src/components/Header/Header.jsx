import "./Header.css";

import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <ul className="header-menu">
        <Link to="/" className="link-header">
          <li>Home</li>
        </Link>
        <Link
          to="/"
          className="link-header"
          onClick={() => {
            window.scrollTo({ top: 750, left: 100, behavior: "smooth" });
          }}
        >
          <li>Category</li>
        </Link>
        <Link
          to="/"
          className="link-header"
          onClick={() => {
            window.scrollTo({ top: 1300, left: 100, behavior: "smooth" });
          }}
        >
          <li>Why us</li>
        </Link>
        <Link
          to="/"
          className="link-header"
          onClick={() => {
            window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
          }}
        >
          <li>Exercises</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
