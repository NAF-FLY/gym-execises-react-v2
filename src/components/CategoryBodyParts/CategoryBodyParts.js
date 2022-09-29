import "./CategoryBodyParts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import useExerciseDBService from "../../services/ExerciseDBService";
import { useEffect, useState } from "react";
import { exerciseOptions } from "../../services/ExerciseDBService";

const CategoryBodyParts = () => {
  const [bodyParts, setBodyParts] = useState([]);
  const { loading, error, getBodyParts } = useExerciseDBService();

  useEffect(() => {
    const onRequest = () => {
      getBodyParts(exerciseOptions).then(onBodyPartsLoaded);
    };
    onRequest();
    // console.log(onRequest());
    // eslint-disable-next-line
  }, []);

  const onBodyPartsLoaded = (newBodyParts) => {
    setBodyParts(["all", ...newBodyParts]);
  };

  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Execises</span>
        <span className="stroke-text">to shape you</span>
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
          <SwiperSlide>
            <div className="program-categories">
              <div className="category">
                <img
                  src={require(`../../assets/icons/${bodyPart}.svg`)}
                  key={index}
                />
                <span key={index}>{bodyPart}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CategoryBodyParts;
