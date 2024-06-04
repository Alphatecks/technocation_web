import React, { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import birdVideo from "../../assets/bird-video.mp4";
import "./videos.css";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="video-container">
      <video
        src={birdVideo}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={true}
      />
      <div className="video-overlay">
        <div className="video-overlay_circle" onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
