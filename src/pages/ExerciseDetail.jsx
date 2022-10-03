import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import ExerciseVideos from "../components/ExerciseVideos/ExerciseVideos";
import Header from "../components/Header/Header";
import SimilarExercises from "../components/SimilarExercises/SimilarExercises";

import { exerciseOptions } from "../data/options";
import { youtubeOptions } from "../data/options";
import useExerciseDBService from "../services/ExerciseDBService";
import useYoutubeDBService from "../services/YoutubeDBService";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  const { getExerciseDetail, getExerciseTarget, getExerciseEquipment } =
    useExerciseDBService();
  const { getExerciseVideos } = useYoutubeDBService();

  useEffect(() => {
    const onRequest = async () => {
      const details = await getExerciseDetail(exerciseOptions, id);
      setExerciseDetail(details);
      const youtube = await getExerciseVideos(youtubeOptions, details.name);
      setExerciseVideos(youtube.contents);
      const target = await getExerciseTarget(exerciseOptions, details.target);
      setTargetMuscleExercises(target);
      const equipment = await getExerciseEquipment(
        exerciseOptions,
        details.equipment
      );
      setEquipmentExercises(equipment);
    };

    onRequest();
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="exerciseDetail">
      <Header />
      <div className="exercise-detail-container">
        <Detail exerciseDetail={exerciseDetail} />

        <ExerciseVideos
          exerciseVideos={exerciseVideos}
          name={exerciseDetail.name}
        />
        <SimilarExercises
          targetMuscleExercises={targetMuscleExercises}
          equipmentExercises={equipmentExercises}
        />
      </div>
    </div>
  );
};

export default ExerciseDetail;
