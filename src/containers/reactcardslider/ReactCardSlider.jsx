import React, { useState } from 'react';
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { FaRegClock, FaStar, FaBookmark } from "react-icons/fa";
import { learn } from '../../assets/import';
import './reactcardslider.css';

const ReactCardSlider = (props) => {
    const slides = [
        { image: 'https://fastly.picsum.photos/id/219/200/300.jpg?hmac=RGnJfbO2380zLCFSj2tm_q0vW0wtw67d0fhWHX2IoDk', profileName: "Tolu Peters", profileImg: learn, title: "UI/UX Design ", price: "$50", time: "2hr 30mins", rating: "4.5/5" },
        { image: 'https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I', profileName: "Adamu Esther", profileImg: learn, title: "Data Analysis ", price: "$70", time: "2hr ", rating: "4.8/5" },
        { image: 'https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY', profileName: "Fred Stone", profileImg: learn, title: "React Js ", price: "$80", time: "1hr 30mins", rating: "4.3/5" },
        { image: 'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I', profileName: "Pelumi Angel", profileImg: learn, title: "Node Js", price: "$40", time: "3hr", rating: "4.5/5" },
        { image: 'https://fastly.picsum.photos/id/250/200/300.jpg?hmac=igVdxs-AgITpHwPAZ80mpAfmhrGBvN_xThJlhp7vOqE', profileName: "Ben John", profileImg: learn, title: "HTML and CSS ", price: "$50", time: "1hr 30mins", rating: "4.9/5" },
        { image: learn, profileName: "Patrick Bob", profileImg: learn, title: "Javascript Fundamentals ", price: "$60", time: "2hr 30mins", rating: "4.9/5" },
        { image: learn, profileName: "Toji yuji", profileImg: learn, title: "Cyber security ", price: "$100", time: "2hr ", rating: "4.9/5" }
    ];

    const [bookmarks, setBookmarks] = useState(Array(slides.length).fill(false));

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    const toggleBookmark = (index) => {
        setBookmarks(prevBookmarks => {
            const newBookmarks = [...prevBookmarks];
            newBookmarks[index] = !newBookmarks[index];
            return newBookmarks;
        });
    };

    return (
        <div className='main-slider-container' id='main-slider-container'>
            <MdChevronLeft size={40} className='left slider-icon' onClick={slideLeft} />
            <div id='slider' className='slider'>
                {slides.map((slide, index) => (
                    <div className="slider-card" key={index}>
                        <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="profile-pill">
                                <div className="profile-pill_img" style={{ backgroundImage: `url(${slide.profileImg})` }}></div>
                                <p className='profile-pill_name'> {slide.profileName}</p>
                            </div>
                            <div className="bookmark" onClick={() => toggleBookmark(index)}>
                                <FaBookmark className='bookmark-mark' size={18} style={{ color: bookmarks[index] ? '#8c12e3' : 'white' }} />
                            </div>
                        </div>
                        <br />
                        <p className='card-title'>{slide.title}</p>
                        <div className="card-details">
                            <div className="dcol-3">
                                <FaRegClock className='card-icons' />
                                <p> {slide.time}</p>
                            </div>
                            <div className="dcol-3">
                                <FaStar className='card-icons' />
                                <p>{slide.rating}</p>
                            </div>
                            <div className="dcol-3 pill">
                                <p><strong> {slide.price}</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <MdChevronRight size={40} className='right slider-icon' onClick={slideRight} />
        </div>
    );
};

export default ReactCardSlider;
