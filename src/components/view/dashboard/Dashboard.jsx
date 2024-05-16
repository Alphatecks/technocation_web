import React from 'react'
import "./dashboard.css";
import { MainLayout, Categories,ReactCardSlider, MyLearning, ProgressBar } from '../../../containers';
import { Link } from 'react-router-dom';
// import Test from '../../../Test';


const Dashboard = () => {
  const active = {
    color: "#6f55d4"
  } 

  const flexiWidth ={
    width : "49%",
  }

  const flexStyle = {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    gap: "20px",
    flexWrap: "wrap",
  }; 

  return (
    <div>
      <MainLayout activeHome={active} title="Featured Courses">
        <br />
        <ReactCardSlider />
        <br />
        <Categories />
        <br />
        <br />
        <MyLearning displayStyle={flexStyle} editWidth={flexiWidth} title={"My Learning"} progressBar={<ProgressBar />}/>
        <br />
        <Link to="/courses" style={{margin:"auto"}}>
            <button className='purple-btn dash-btn'>See all</button> 
        </Link>
      </MainLayout>
    </div>
  )
}

export default Dashboard