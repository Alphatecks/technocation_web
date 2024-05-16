import React from 'react'
import "./categories.css"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { MdDesignServices } from "react-icons/md";




const Categories = ( props) => {

  const Art = <MdDesignServices size={25}/>;

  const slides = [
    {icon: Art, title: "Design"},
    {icon: Art, title: "Design"},
    {icon: Art, title: "Design"},
    {icon: Art, title: "Design"},
  ];

  const slideLeft = () => {
    var slider = document.getElementById("categories-slider");

        slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById("categories-slider");

        slider.scrollLeft = slider.scrollLeft + 500;
  }



  return (
    <div>
        <h1>Categories</h1>
        <br />
        <div id="categories_slider-container">
        <MdChevronLeft size={20} className='left slider-icon' onClick={slideLeft} />
            <div id='categories-slider'>
                {
                    slides.map((slide,index) =>{
                        return(
                          <div className=" slider-card" id='categories_slider-card' key={index}>
                              <div className="slider-details">
                                  <div className="slider-details_icons">
                                     {slide.icon}
                                  </div>
                                  <div className="slider-details_title">
                                    <p> {slide.title}</p>
                                  </div>
                              </div>
                          </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={20} className='right slider-icon' onClick={slideRight}/>
        </div>
    </div>
  )
}

export default Categories