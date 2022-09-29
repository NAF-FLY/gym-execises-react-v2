import { useState } from "react";
import "./App.css";
import CategoryBodyParts from "./components/CategoryBodyParts/CategoryBodyParts";
import Exercises from "./components/Exercises/Exercises";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Reasons from "./components/Reasons/Reasons";
function App() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <div className="App">
      <Hero />
      <CategoryBodyParts />
      <Reasons />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
