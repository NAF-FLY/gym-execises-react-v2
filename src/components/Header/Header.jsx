import "./Header.css";

import Logo from "../../assets/logo.png";
import useExerciseDBService from "../../services/ExerciseDBService";
import { useEffect, useState } from "react";
import { exerciseOptions } from "../../services/ExerciseDBService";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Category</li>
        <li>Why us</li>
        <li>Exercises</li>
      </ul>
    </div>
  );
};

export default Header;
