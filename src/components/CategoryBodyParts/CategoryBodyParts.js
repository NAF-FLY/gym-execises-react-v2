import "./CategoryBodyParts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import useExerciseDBService from "../../services/ExerciseDBService";
import { useEffect, useState } from "react";
import { exerciseOptions } from "../../data/options";

import LeftArrow from "../../assets/icons/arrow-left.svg";
import RightArrow from "../../assets/icons/arrow-right.svg";

const CategoryBodyParts = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const { loading, error, getBodyParts, getExercises } = useExerciseDBService();

  useEffect(() => {
    const onRequest = () => {
      getBodyParts(exerciseOptions).then(onBodyPartsLoaded);
    };
    onRequest();
    // eslint-disable-next-line
  }, []);

  const onBodyPartsLoaded = (newBodyParts) => {
    setBodyParts(["all", ...newBodyParts]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getExercises(exerciseOptions).then(onSearchLoaded);

    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

    setSearch("");
  };

  const onSearchLoaded = (searchedExercises) => {
    console.log(searchedExercises);
    if (search) {
      const searched = searchedExercises.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setExercises(searched);
    }
  };

  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Execises</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="form">
        <form className="search-form">
          <input
            placeholder="Search Exercises"
            className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            type="text"
          ></input>
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </form>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {bodyParts.map((bodyPart, index) => (
          <SwiperSlide
            onClick={() => {
              setBodyPart(bodyPart);
              window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
            }}
          >
            <div className="program-categories" key={index}>
              <div className="category">
                <img src={require(`../../assets/icons/${bodyPart}.svg`)} />
                <span>{bodyPart}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="arrows">
        <img src={LeftArrow} alt="left-arrow" className="arrow" />
        <img src={RightArrow} alt="right-arrow" className="arrow" />
      </div>
    </div>
  );
};

export default CategoryBodyParts;
