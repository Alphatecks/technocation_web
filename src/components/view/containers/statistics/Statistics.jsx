import React from "react";
import "./statistics.css";
import {
  Achievements,
  MainLayout,
  ProgressBar,
  ThumbSlider,
} from "../../../../containers";
import { FaStar } from "react-icons/fa";
import { FaBookOpen, FaCheckDouble } from "react-icons/fa6";
import { MdOutlineHourglassBottom } from "react-icons/md";
import { LuGoal } from "react-icons/lu";

import { Link } from "react-router-dom";

const Statistics = () => {
  const flexiWidth = {
    width: "100%",
  };
  const flexStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  };

  const active = {
    color: "#6f55d4",
  };

  return (
    <div>
      <MainLayout title={"This Week"}>
        <div className="statistics-page">
          <main>
            <div className="chartbar_section"></div>
            <br />
            <div className="goals-streak_section">
              <div className="row">
                <div className="col-2 goals-n-streak">
                  <p>
                    {" "}
                    <LuGoal /> GOAL
                  </p>
                  <div className="col-3_img light-purple-bg ">
                    <div className="icon purple-text"> 2/3 days </div>
                  </div>
                </div>
                <div className="col-2 goals-n-streak">
                  <p>
                    {" "}
                    <FaStar /> STREAK
                  </p>
                  <div className="col-3_img light-green-bg ">
                    <div className="icon green-text"> 103 days </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <p className="title"> My Performance </p>
            <br />
            <div className="row mp">
              <div className="col-3">
                <div className="col-3_img light-purple-bg ">
                  <div className="icon purple-text">
                    {" "}
                    <FaBookOpen />{" "}
                  </div>
                </div>
                <p className="stats-title "> TIME SPENT</p>
                <p className="stats-count">31.8 hours</p>
              </div>
              <div className="col-3">
                <div className="col-3_img light-orange-bg ">
                  <div className="icon orange-text">
                    {" "}
                    <MdOutlineHourglassBottom />{" "}
                  </div>
                </div>
                <p className="stats-title "> AVERAGE/DAY</p>
                <p className="stats-count">4.6 hours</p>
              </div>
              <div className="col-3">
                <div className="col-3_img light-green-bg ">
                  <div className="icon green-text">
                    {" "}
                    <FaCheckDouble />{" "}
                  </div>
                </div>
                <p className="stats-title "> FINISHED COURSES</p>
                <p className="stats-count">12 courses</p>
              </div>
            </div>
          </main>

          <aside>
            <p className="title"> My Activity </p>
            <div className="activity-section">
              <div className="recent">
                <p className="title"> MONDAY</p>
                <div className="activity row">
                  <div className="activity_img"></div>
                  <div className="activity_details">
                    <p className="title">Becoming a Photographer</p>
                    <p className="sub-title">Chris Kinely</p>
                  </div>
                </div>
                <br />
                <div className="activity row">
                  <div className="activity_img"></div>
                  <div className="activity_details">
                    <p className="title">Design Thinking 2.0</p>
                    <p className="sub-title">Clara Manning</p>
                  </div>
                </div>
              </div>
              <br />
              <div className="horizontal"></div>
              <br />
              <div className=" recent older">
                <p className="title">10 DAYS AGO</p>
                <div className="activity row">
                  <div className="activity_img"></div>
                  <div className="activity_details">
                    <p className="title">Design Thinking 2.0</p>
                    <p className="sub-title">Clara Manning</p>
                  </div>
                </div>
              </div>
              <br />
              <div className="horizontal"></div>
              <br />
              <Link>
                <p className="friends-link">VIEW ALL ACTIVITY</p>
              </Link>
            </div>
            <br />
            <br />
            <p className="title"> Last Year Comparison </p>
            <div className="activity-section">
              <div className=" recent row">
                <p className="title">STUDY TIME</p>
                <div>
                  <div className="slidecontainer">
                    {/* <p>Value: <span id="demo"></span></p> */}
                    <ThumbSlider />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </MainLayout>
    </div>
  );
};

export default Statistics;
