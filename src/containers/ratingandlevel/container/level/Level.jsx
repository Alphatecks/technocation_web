import React from 'react'
import "./level.css"

const Level = () => {
  return (
    <div>
      <p className='search-headers'>LEVEL</p>
      <br/>
      <div className="level-container">
        <div className="row level-row">
          
          <label class="small_categories-container_container">
            <p> Beginners </p>
            <div>
                <input type="checkbox"/>
                <span class="checkmark"></span>
            </div>
              
          </label>

          <label class="small_categories-container_container">
            <p> Intermediate </p>
            <div>
                <input type="checkbox"/>
                <span class="checkmark"></span>
            </div>
              
          </label>

          <label class="small_categories-container_container">
            <p> Professional </p>
            <div>
                <input type="checkbox"/>
                <span class="checkmark"></span>
            </div>
              
          </label>


        </div>
      </div>
    </div>
  )
}

export default Level