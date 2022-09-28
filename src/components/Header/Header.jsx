import "./Header.css";

import Logo from "../../assets/logo.png";
import useExerciseDBService from "../../services/ExerciseDBService";
import { useEffect, useState } from "react";
import { exerciseOptions } from "../../services/ExerciseDBService";

const Header = () => {
  const [bodyParts, setBodyParts] = useState([]);
  const { loading, error, getBodyParts } = useExerciseDBService();

  useEffect(() => {
    const onRequest = () => {
      getBodyParts(exerciseOptions).then(onBodyPartsLoaded);
    };
    onRequest();
    // console.log(onRequest());
    // eslint-disable-next-line
  }, []);

  const onBodyPartsLoaded = (newBodyParts) => {
    setBodyParts(["all", ...newBodyParts]);
  };

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Exercises</li>
        <li>Why us</li>
      </ul>
    </div>
  );
};

export default Header;
