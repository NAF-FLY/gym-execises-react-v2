import { Link } from "react-router-dom";

import "./ExerciseCard.css";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      style={{ textDecoration: "none" }}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <img src={exercise.gifUrl} alt="gif" loading="lazy" />
      <div className="tag-container">
        <div className="tag">
          {exercise.bodyPart.length > 9
            ? exercise.bodyPart.slice(0, 6)
            : exercise.bodyPart}
        </div>
        <div className="tag target">{exercise.target}</div>
      </div>
      <h3 className="text-bodyPart">
        {exercise.name.length > 14
          ? exercise.name.slice(0, 14) + "..."
          : exercise.name}
      </h3>
    </Link>
  );
};

export default ExerciseCard;
