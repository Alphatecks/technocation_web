import React from 'react'
import "./getstarted.css"
import { BoxLayout,  } from "../../../containers";
import { education, horizontal } from '../../../assets/import';
import { Link } from "react-router-dom";


const Getstarted = () => {
  return (
    <div className="gs-container">    
      <div className="gs-container_wrapper">
        <BoxLayout 
          title = "Discover Passion"
          text = "Find out what topics you find interesting,learn new Skills and Connect with people who are passionate about similar topics"
          button={<Link to = "/register"> <button> GET STARTED </button> </Link>}
          logo={<img src={horizontal} alt="TECHNOCATION LOGO" />}
          >
          

          <div className="boxlayout-container_row_col-2_img-wrapper">
              <img src={education} alt="Education illustration" />
          </div>

          
        </BoxLayout>
      </div>
    </div>
  )
}

export default Getstarted