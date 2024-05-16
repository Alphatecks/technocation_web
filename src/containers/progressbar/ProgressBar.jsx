import React, {useState} from 'react'
import "./progressbar.css"

const ProgressBar = ( {progressTitle} ) => {
    const [progress, setProgress] = useState(0);

    const handleButtonClick = () => {
        if (progress < 100) {
            setProgress(progress + 5);
        }
    }

    const handleButtonReset = () => {
        setProgress(0);
    }
    


    return (
        <div className='pro-bar-container '>
            <div className="pro-bar">
                <div className="pro-bar_fill" style={{width: `${progress}%` }}>
                </div>
            </div>
            <div className="pro-bar_label">{progress}% complete { progressTitle }</div>
            <button className='e-purple-btn' onClick={handleButtonClick}>Progress</button>
            <button className='e-purple-btn' onClick={handleButtonReset}>Reset</button>
        </div>
    )
}

export default ProgressBar