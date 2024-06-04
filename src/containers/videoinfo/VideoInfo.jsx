import React from "react";
import "./videoinfo.css";

import { learn } from "../../assets/import";
import { FaRegClock, FaStar } from "react-icons/fa";
import Video from "../videocontainer/Video";

const VideoInfo = ({ btnTwoTitle, btnOneTitle }) => {
  const slides = [
    {
      image:
        "https://fastly.picsum.photos/id/219/200/300.jpg?hmac=RGnJfbO2380zLCFSj2tm_q0vW0wtw67d0fhWHX2IoDk",
      profileName: "Tolu Peters",
      profileImg: learn,
      title: "UI/UX Design ",
      price: "$50",
      time: "2hr 30mins",
      rating: "4.5/5",
    },
  ];

  return (
    <div className="video-info_container">
      <div className="row column">
        <div className="video-info_container_col-image">
          <Video />
        </div>
        <br />
        <div className="video-info_container_col-details">
          <p className="video-info_container_col-details_title">
            Becoming a Photographer
          </p>
          <br />
          <div className="video-info_profile-pill">
            <div
              className="video-info_profile-pill_img"
              style={{ backgroundImage: `url(${learn})` }}
            ></div>
            <p className="video-info_profile-pill_name"> Tolu Peters</p>
          </div>

          <div className="video-info_dcol-3">
            <FaRegClock className="video-info_card-icons" />
            <p> 2hr 30mins</p>
          </div>
          <div className="video-info_dcol-3">
            <FaStar className="video-info_card-icons" />
            <p> 4.5/5</p>
          </div>
          <br />
          <p className="video-info_container_col-details_title-description">
            Course Description
          </p>
          <br />
          <p className="video-info_container_col-details_title-description_subtitle">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iusto
            laboriosam laudantium? Alias error voluptate similique reprehenderit
            dolore saepe atque rerum pariatur officiis, consequatur quidem
            possimus aliquam et aspernatur deleniti?
          </p>
          <br />
          <br />
          <br />

          <div className="video-info_buttons">
            <button className="video-button purple-border purple-text no-bg">
              {" "}
              {btnOneTitle}{" "}
            </button>
            <button className="video-button purple-btn">{btnTwoTitle} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
