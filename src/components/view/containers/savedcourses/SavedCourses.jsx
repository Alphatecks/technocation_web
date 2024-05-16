import React from 'react'
import "./savedcourses.css"
import {  MyLearning, SplitLayout, VideoInfo } from '../../../../containers'

const SavedCourses = () => {

    const flexiWidth ={
        width : "100%",
    }
    const flexStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "20px",
        flexWrap: "wrap",
      }; 
    

    const active = {
    color: "#6f55d4"
    } 

    return (
    <div>
        <SplitLayout activeBookmark ={active} title="Saved Courses" secondCol={<VideoInfo btnOneTitle="PREVIEW" btnTwoTitle="BUY NOW"/>}>
            <MyLearning displayStyle={flexStyle} editWidth={flexiWidth} buyButton={<button className=" purple-btn "> BUY</button>}/>
            
            <MyLearning displayStyle={flexStyle} editWidth={flexiWidth} buyButton={<button className=" purple-btn"> BUY</button>}/>
            
        </SplitLayout>
    </div>
    )
}

export default SavedCourses