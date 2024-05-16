import React from 'react'
import "./search.css"
import { Card, MainLayout, RatingAndLevel, SearchBar, SmallCategories, TopSearch } from '../../../../containers'

const Search = () => {
  
    const active = {
    color: "#6f55d4"
    } 

    return (
    <div>
        <MainLayout activeSearch={active} title="Find your favourites">
            <br />
            <br />
            <SearchBar />
            <br />
            <br />
            <div className="horizontal-line"></div>
            <p className='search-headers'>TOP SEARCHES</p>
            <br />
            <TopSearch/>
            <br />
            <br />
            <div className="horizontal-line"></div>
            <p className='search-headers'>CATEGORIES</p>
            <br />
            <SmallCategories/>
            <br/>
            <br />
            <div className="horizontal-line"></div>
            <RatingAndLevel />
            <br />
            <br />
            <div className="horizontal-line"></div>
            <p className='search-headers'>RECOMMENDED FOR YOU</p>
            <br />
            <Card />
            

        </MainLayout>
    </div>
    )
}

export default Search