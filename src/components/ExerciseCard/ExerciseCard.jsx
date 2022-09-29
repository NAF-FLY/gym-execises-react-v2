import "./ExerciseCard.css";

const ExerciseCard = ({ exercise }) => {
  console.log(exercise);
  return (
    <div className="exercise-card">
      <img src={exercise.gifUrl} alt="ep[roqjwe" loading="lazy" />
      <div className="tag-container">
        <div className="tag">{exercise.bodyPart}</div>
        <div className="tag target">{exercise.target}</div>
      </div>
      <h3 className="text-bodyPart">{exercise.name}</h3>
    </div>
  );
};

export default ExerciseCard;
