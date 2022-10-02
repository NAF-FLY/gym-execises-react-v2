import React from "react";
import Loader from "../Loader/Loader";
import "./ExerciseVideos.css";

const ExerciseVideos = ({ exerciseVideos }) => {
  return (
    <div className="exerciseVideos">
      <div className="video-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO WATCH</span>
        <span className="text">YOUR EXERCISE</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      <div className="video-container">
        {exerciseVideos.length ? (
          exerciseVideos.slice(0, 12).map(({ video }, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              className="video-link"
              target="_blank"
              rel="norereferrer"
            >
              <img
                src={video.thumbnails[0].url}
                alt={video.title}
                className="video-cover"
              />
              <div>
                <h5 className="video-title">
                  {video.title.length > 40
                    ? `${video.title.substr(0, 40)}...`
                    : video.title}
                </h5>
                <h5 className="video-channel">{video.channelName}</h5>
              </div>
            </a>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ExerciseVideos;
