import { useState } from "react";

import CategoryBodyParts from "../components/CategoryBodyParts/CategoryBodyParts";
import Exercises from "../components/Exercises/Exercises";
import Hero from "../components/Hero/Hero";
import Join from "../components/Join/Join";
import Reasons from "../components/Reasons/Reasons";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <>
      <Hero />
      <CategoryBodyParts
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Reasons />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
      <Join />
    </>
  );
};

export default Home;
