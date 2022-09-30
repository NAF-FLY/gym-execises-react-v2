import { useHttp } from "../hooks/http.hook";

const useExerciseDBService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://exerciseb.p.rapidapi.com/exercises";

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

  return {
    loading,
    error,
    clearError,
    getBodyParts,
    getExercises,
    getSelectedExercises,
  };
};

export default useExerciseDBService;
