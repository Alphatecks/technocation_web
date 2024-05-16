import React from 'react'
import "./searchbar.css"

const SearchBar = () => {
  return (
    <div>
        <div className="search-container">
            <div className="search-container_row">
                <div className="search-container_input">
                    <input type="search" name="" id="" placeholder='Search Categories' className='search-input' />
                </div>
                <div className="search-btn">
                    <button className='purple-btn-no-hover search-btn'>SEARCH</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar