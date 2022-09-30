import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import useExerciseDBService from "../../services/ExerciseDBService";
import { exerciseOptions } from "../../data/options";
import "../ExerciseCard/ExerciseCard.css";
import "./Exercises.css";
import { Box, Stack } from "@mui/material";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const { loading, error, getExercises, getSelectedExercises } =
    useExerciseDBService();
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#f48915",
      },
      text: {
        main: "#f48915",
      },
    },
  });

  useEffect(() => {
    const onRequest = () => {
      if (bodyPart === "all") {
        getExercises(exerciseOptions).then(onExercisesLoaded);
      } else {
        getSelectedExercises(exerciseOptions, bodyPart).then(onExercisesLoaded);
      }
    };

    onRequest();
    // eslint-disable-next-line
  }, [bodyPart]);

  const onExercisesLoaded = (newExercises) => {
    setExercises(newExercises);
  };

  const currentExercisesTest = [
    { name: "asdfsadf" },
    { name: "asdfsadf" },
    { name: "asdfsadf" },
    { name: "asdfsadf" },
    { name: "asdfsadf" },
    { name: "asdfsadf" },
    { name: "asdfsadf" },
    { name: "asdfsadf" },
    { name: "asdfsadf" },
    { name: "asdfsadf" },
    { name: "asdfsadf" },
    { name: "asdfsadf" },
  ];

  return (
    <Box>
      <div className="plans-container" id="pl">
        <div className="blur blur-p-1"></div>
        <div className="blur blur-p-2"></div>
        <div className="programs-header" style={{ gap: "2rem" }}>
          <span className="stroke-text">READY TO START</span>
          <span className="text">YOUR JOURNEY</span>
          <span className="stroke-text">NOW WITH US</span>
        </div>
      </div>
      <Stack mt="50px">
        <div className="exercises">
          <div className="container-exercises">
            {currentExercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
          </div>
        </div>
      </Stack>
      <Stack mt="50px" alignItems="center">
        {exercises.length > 12 && (
          <ThemeProvider theme={theme}>
            <Pagination
              color="text"
              shape="rounded"
              sx={{
                button: { color: "#ffffff" },
                div: { color: "#ffffff" },
              }}
              defaultPage={1}
              count={Math.ceil(exercises.length / 12)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          </ThemeProvider>
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
