import React from 'react'
import "./ratingandlevel.css"
import { Level, Rating } from './container'

const RatingAndLevel = () => {
  return (
    <div>
        <div className="rl-container">
            <div className="row rl-container_row">
                <Rating  />
                
                <Level />
            </div>
        </div>
    </div>
  )
}

export default RatingAndLevel