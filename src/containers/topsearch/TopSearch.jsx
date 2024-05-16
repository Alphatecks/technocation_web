import React from 'react'
import "./topsearch.css"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const TopSearch = () => {

  const slides = [
    { title: "Marketing Strategy"},
    { title: "UX Designs"},
    { title: "Excel"},
    { title: "Adobe Photoshop"},
    { title: "CRM"},
    { title: "Photography"},
    { title: "Content Making"},
  ];

  const slideLeft = () => {
    var slider = document.getElementById("topsearch-slider");

        slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById("topsearch-slider");

        slider.scrollLeft = slider.scrollLeft + 500;
  }


  return (
    <div>
        <div id="topsearch_slider-container">
            <MdChevronLeft size={20} className='left slider-icon' onClick={slideLeft} />
            <div id='topsearch-slider'>
                {
                    slides.map((slide,index) =>{
                        return(
                          <div className=" slider-card" id='topsearch_slider-card' key={index}>
                              <div className="topsearch-slider-details">
                                  <div className="topsearch-slider-details_title">
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

export default TopSearch