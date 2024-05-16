import React from 'react'
import "./courses.css"
import { MyLearning, ProgressBar, SplitLayout, VideoInfo } from '../../../../containers'
import { FaChartBar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Courses = () => {
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

    const secondColInfo = <VideoInfo btnOneTitle="REVIEW COURSE" btnTwoTitle="CONTINUE LEARNING"/>
    

    return (
    <div>
        <SplitLayout activePlay ={active} title="My Learning" secondCol={secondColInfo} stats={
        <Link to="/statistics" ><FaChartBar size={20} style={{marginRight:"10px"}} /></Link>
            } statsTitle= {<Link to="/statistics" >Statistics</Link>}  >
            <MyLearning displayStyle={flexStyle} editWidth={flexiWidth} progressBar={<ProgressBar />} />
            
            <MyLearning displayStyle={flexStyle} editWidth={flexiWidth} progressBar={<ProgressBar />}/>
            


        </SplitLayout>
    </div>
    )
}

export default Courses