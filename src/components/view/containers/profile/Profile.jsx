import React from 'react'
import "./profile.css"
import { Achievements, MainLayout, ProgressBar } from '../../../../containers'
import { FaMapPin } from "react-icons/fa";
import { FaCheck, FaTrophy, FaPlus } from "react-icons/fa6";
import { MdOutlineHourglassBottom } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Profile = () => {


    const flexiWidth ={
        width : "100%",
    }
    const flexStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "20px",
        flexWrap: "wrap",
      }; 

      
    const active = {
        color: "#6f55d4"
        } 

        return (
        <div>
            <MainLayout activeContact={active} >
                <div className="profile-page">
                    <main>
                        {/* profile section */}
                        <div className="row profile">
                            <div className="profile-scol2">
                                <div className="profile-scol2_img">
                                    <img src="https://fastly.picsum.photos/id/250/200/300.jpg?hmac=igVdxs-AgITpHwPAZ80mpAfmhrGBvN_xThJlhp7vOqE" alt="profile " />
                                </div>
                            </div>
                            
                            <div className="profile-scol2">
                                <h1>Sally Robins</h1>
                                <p><FaMapPin size={20}/>  <strong>NEW YORK</strong></p>
                                
                                <div className="profile-scol2_details"> 
                                    <div className="profile-scol2_details-container row">
                                        <div className="col-3 row  ">
                                            <p className='num-title'>0</p>
                                            <p >My Courses</p>
                                        </div>
                                        <div className="col-3 row  ">
                                            <p className='num-title'>2</p>
                                            <p>Followers</p>
                                        </div>
                                        <div className="col-3 row  ">
                                            <p className='num-title'>32</p>
                                            <p>Following</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br/>
                        <br/>

                    {/* Statistics section  */}


                    <div className="container stats">
                        <p className='stats-head-title'>Total Statistics</p>
                        <div className="row stats-row">
                            <div className="col-3">
                                <div className="col-3_img light-purple-bg ">
                                    <div className="icon purple-text"> <FaCheck/> </div>
                                </div>
                                <p className="stats-title "> FINISHED COURSES</p>
                                <p className="stats-count">2</p>
                            </div>
                            <div className="col-3">
                                <div className="col-3_img light-orange-bg">
                                    <div className="icon orange-text"> <MdOutlineHourglassBottom/> </div>
                                </div>
                                <p className="stats-title"> HOURS LEARNED</p>
                                <p className="stats-count">56</p>
                            </div>
                            <div className="col-3">
                                <div className="col-3_img light-green-bg">
                                    <div className="icon green-text"><FaTrophy/> </div>
                                </div>
                                <p className="stats-title"> SKILLS ACHIEVED</p>
                                <p className="stats-count">7</p>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />

                    {/* Achievements section */}

                    

                    <div className="container achievement">
                        <p className='stats-head-title'>Achievements</p>
                    </div>

                    <Achievements imageContent={
                                <div className="col-3_img light-orange-bg achieve-img ">
                                    <div className="icon orange-text"> <MdOutlineHourglassBottom/> </div>
                                </div>} 
                    cardTitle={"Committed Learner"} displayStyle={flexStyle} editWidth={flexiWidth} progressBar={<ProgressBar progressTitle={"Reach a 3 days streak"} />}/>
                    <Achievements imageContent={
                        <div className="col-3_img light-green-bg achieve-img">
                            <div className="icon green-text"><FaTrophy/> </div>
                        </div>
                    } cardTitle={"Points Collector"} displayStyle={flexStyle} editWidth={flexiWidth} progressBar={<ProgressBar progressTitle={"Earn 1800 more points"} />}/>

                    </main>


                    <aside>
                        {/* friend suggestion section */}

                        <div className="suggestion-section">
                            <p className='stats-head-title'>Friend Suggestions</p>
                            <div className="suggestion-container">
                                <div className="friends-pill row">
                                    <div className="friends_img">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="friends_name">
                                        <p>Laura Evans</p>
                                    </div>
                                    <div className="friends_add">
                                        <FaPlus />
                                    </div>
                                    <div className="friends_close-icon">
                                        <IoClose />
                                    </div>
                                </div>

                                <div className="friends-pill row">
                                    <div className="friends_img">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="friends_name">
                                        <p>Laura Evans</p>
                                    </div>
                                    <div className="friends_add">
                                        <FaPlus />
                                    </div>
                                    <div className="friends_close-icon">
                                        <IoClose />
                                    </div>
                                </div>

                                <br />

                                <Link>
                                <p className='friends-link'> VIEW ALL</p>
                                </Link>
                            </div>
                            <br />
                            <br />

                            <p className='stats-head-title'>Friend </p>
                            <div className="suggestion-container">
                                <div className="friends-pill row">
                                    <div className="friends_img">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="friends_name">
                                        <p>Laura Evans</p>
                                    </div>
                                    <Link>
                                        <p className='friends-link'> PROFILE</p>
                                    </Link>
                                </div>

                                <div className="friends-pill row">
                                    <div className="friends_img">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="friends_name">
                                        <p>Laura Evans</p>
                                    </div>
                                    <Link>
                                        <p className='friends-link'> PROFILE</p>
                                    </Link>
                                </div>

                                <br />

                                <Link>
                                    <p className='friends-link'> VIEW ALL</p>
                                </Link>
                            </div>

                            <br />
                            <br />

                            <div className="suggestion_buttons">
                                <button className="video-button purple-border purple-text no-bg"> Find friends  </button>
                                <button className="video-button purple-btn">Invite Friends </button>
                            </div>


                            

                        </div>

                    </aside>
                
                </div>

            </MainLayout>
        </div>
    )
}

export default Profile