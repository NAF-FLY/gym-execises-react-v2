import { useHttp } from "../hooks/http.hook";

const useExerciseDBService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://exercisedb.p.rapidapi.com/exercises";

  const getBodyParts = async (exerciseOptions) => {
    const res = await request(`${_apiBase}/bodyPartList`, exerciseOptions);

    return res;
  };

  const getExercises = async (exerciseOptions) => {
    const res = await request(`${_apiBase}`, exerciseOptions);

    return res;
  };

  const getSelectedExercises = async (exerciseOptions, bodyPart) => {
    const res = await request(
      `${_apiBase}/bodyPart/${bodyPart}`,
      exerciseOptions
    );

    return res;
  };

  const getExerciseDetail = async (exerciseOptions, id) => {
    const res = await request(`${_apiBase}/exercise/${id}`, exerciseOptions);

    return res;
  };

  const getExerciseTarget = async (exerciseOptions, target) => {
    const res = await request(`${_apiBase}/target/${target}`, exerciseOptions);

    return res;
  };

  const getExerciseEquipment = async (exerciseOptions, equipment) => {
    const res = await request(
      `${_apiBase}/equipment/${equipment}`,
      exerciseOptions
    );

    return res;
  };

  return {
    loading,
    error,
    clearError,
    getBodyParts,
    getExercises,
    getSelectedExercises,
    getExerciseDetail,
    getExerciseTarget,
    getExerciseEquipment,
  };
};

export default useExerciseDBService;
