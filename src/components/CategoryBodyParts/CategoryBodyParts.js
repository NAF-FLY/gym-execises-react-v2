import "./CategoryBodyParts.css";
import RightArrow from "../../assets/rightArrow.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
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
      {/* <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div> */}
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
                <img src={require(`../../assets/icons/${bodyPart}.svg`)} />
                <span>{bodyPart}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CategoryBodyParts;
