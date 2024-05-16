import React, {useState} from 'react'
import "./rating.css"
import { FaStar } from "react-icons/fa";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null)

  return (
    <div>
      <p className='search-headers'>RATING</p>
      <br/>
      <div className="rating-container">
        {[...Array(5)].map( (star, i) => { 

          const ratingValue = i + 1;

          return (
            <label className='rating-input'>
              <input type="radio" name="rating" value={ratingValue}
               onClick={() => setRating(ratingValue)}
               />
              <FaStar className='star' size={20} style={{marginRight:"10px"}}
              color={ratingValue <= (hover || rating) ? "#8c12e3" : "#8f8f8f" }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              />
            </label>
          )
        }) }
      </div>
      
      
    </div>
  )
}

export default Rating