import { useHttp } from "../hooks/http.hook";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_EXERCISE_RAPID_API_KEY,
  },
};

const useExerciseDBService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://exercisedb.p.rapidapi.com/exercises/";

  const getBodyParts = async (exerciseOptions) => {
    const res = await request(`${_apiBase}bodyPartList`, exerciseOptions);

    return res;
  };

  //   const getCharacter = async () => {
  //     const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
  //     return _transformCharacter(res.data.results[0]);
  //   };

  //   const getAllComics = async () => {
  //     const res = await request(
  //       `${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
  //     );
  //     return res.data.results.map(_transformComics);
  //   };

  //   const getComic = async (id) => {
  //     const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
  //     return _transformComics(res.data.results[0]);
  //   };

  //   const _transformComics = (comics) => {
  //     return {
  //       id: comics.id,
  //       title: comics.title,
  //       description: comics.description || "There is no description",
  //       pageCount: comics.pageCount
  //         ? `${comics.pageCount} p.`
  //         : "No information about the number of pages",
  //       thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
  //       language: comics.textObjects.language || "en-us",
  //       price: comics.prices[0].price
  //         ? `${comics.prices[0].price}$`
  //         : "not available",
  //     };
  //   };

  return {
    loading,
    error,
    clearError,
    getBodyParts,
    // getCharacter,
    // getAllComics,
    // getComic,
  };
};

export default useExerciseDBService;
