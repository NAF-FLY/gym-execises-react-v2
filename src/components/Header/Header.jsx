import "./Header.css";

import Logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-scroll";
import { Link as Navlink } from "react-router-dom";
import Bars from "../../assets/icons/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <Navlink to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Navlink>
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={Bars}
            alt=""
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            onClick={() => setMenuOpened(true)}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <Navlink
            to="/"
            className="link-header"
            onClick={() => setMenuOpened(false)}
          >
            <li>Home</li>
          </Navlink>
          <Link
            to="programs"
            className="link-header"
            smooth={true}
            onClick={() => {
              setMenuOpened(false);
            }}
          >
            <li>Category</li>
          </Link>
          <Link
            to="reasons"
            className="link-header"
            smooth={true}
            onClick={() => {
              setMenuOpened(false);
            }}
          >
            <li>Why us</li>
          </Link>
          <Link
            to="pl"
            className="link-header"
            smooth={true}
            onClick={() => {
              setMenuOpened(false);
            }}
          >
            <li>Exercises</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
