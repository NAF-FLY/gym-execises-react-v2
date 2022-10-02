import { useHttp } from "../hooks/http.hook";

const useYoutubeDBService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://youtube-search-and-download.p.rapidapi.com";

  const getExerciseVideos = async (youtubeOptions, name) => {
    const res = await request(
      `${_apiBase}/search?query=${name}`,
      youtubeOptions
    );

    return res;
  };

  return {
    loading,
    error,
    clearError,
    getExerciseVideos,
  };
};

export default useYoutubeDBService;
