import React from 'react'
import "./mainlayout.css"
import { FaHome, FaSearch, FaBookmark  } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
// import { logo } from "../../assets/images/logo.fj";
import { Link } from "react-router-dom";
import { logo, vertical } from '../../assets/import';


const MainLayout = ({title, children, activeContact, activeBookmark, activePlay, activeSearch, activeHome}) => {
  return (
    <div>
        <div className="sidebar">
            
            <Link to=""> 
                <img src={logo} alt="TECHNOCATION LOGO" style={{width:"40px", marginBottom:"30px"}} />
            </Link>
            
            <div>
                <Link to="/dashboard" >
                    <div className='social-icons ' style={activeHome}>
                        <FaHome   size={20} />
                        <p>Home</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/search" >
                    <div className='social-icons ' style={activeSearch} >
                        <FaSearch    size={20} />
                        <p >Search</p>
                    </div>
                </Link>
            </div>

            <div>
                <Link to="/courses">
                    <div className="social-icons" style={activePlay}>
                        <FaCirclePlay  size={20} />
                        <p> Courses </p>
                    </div>
                       
                </Link>
            </div>
            
            <div>
                <Link to="/savedcourses">
                    <div className='social-icons ' style={activeBookmark} >
                        <FaBookmark size={20} />
                        <p>Saved</p>
                    </div>
                    
                </Link>
            </div>

            <div>
                <Link to="/profile">
                    <div className='social-icons ' style={activeContact} >
                        <IoMdContact size={20}  />
                        <p>Profile</p>
                    </div>
                    
                </Link>
            </div>
            
            
        </div>
        <div className="mainbody">
            <div className="mainbody-header">
                <h1>{title}</h1>
            </div>
            <div className="body-content">
                {children}
            </div>
        </div>
    </div>
  );
}

export default MainLayout