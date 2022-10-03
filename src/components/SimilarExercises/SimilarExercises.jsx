import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import "./SimilarExercises.css";
import Loader from "../Loader/Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className="similar-exercise">
      <div className="target-container">
        <div className="similar-header">
          <span className="stroke-text">Similar</span>
          <span className="text-target">Target Muscle</span>
          <span className="stroke-text">Exercises</span>
        </div>
        <div className="flex flex-row p-1 relative">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            className="mySwiper"
            breakpoints={{
              940: { slidesPerView: 4, spaceBetween: 20 },
              380: { slidesPerView: 2, spaceBetween: 20 },
            }}
          >
            {targetMuscleExercises.map((target, index) => (
              <SwiperSlide
                onClick={() => {
                  window.scrollTo({
                    top: 100,
                    left: 100,
                    behavior: "smooth",
                  });
                }}
              >
                <ExerciseCard exercise={target} key={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="target-container">
        <div className="similar-header">
          <span className="stroke-text">Similar</span>
          <span className="text">Equipment</span>
          <span className="stroke-text">Exercises</span>
        </div>
        <div className="flex flex-row p-1 relative">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            className="mySwiper"
            breakpoints={{
              940: { slidesPerView: 4, spaceBetween: 20 },
              380: { slidesPerView: 2, spaceBetween: 20 },
            }}
          >
            {equipmentExercises.map((equipment, index) => (
              <SwiperSlide
                onClick={() => {
                  window.scrollTo({
                    top: 100,
                    left: 100,
                    behavior: "smooth",
                  });
                }}
              >
                <ExerciseCard exercise={equipment} key={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SimilarExercises;
