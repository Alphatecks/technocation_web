import React from 'react'
import "./achivements.css"

const Achievements = ( {progressBar, displayStyle, title, editWidth, cardTitle, imageContent }) => {

    const cards = [
        {image: "",  subtitle:"Benjamin Frisker"},
        // {image: "", title: "Points Collector ", subtitle:"Jordan Morgan"}
    ]

  return (
    <div>
        <div className="achievement-container">
        <div className="myl-title"><h1>{title}</h1></div>
            <br />
            <div className="myl-content" style={displayStyle}>
                

                {
                    cards.map(( card, index) => {
                        return (
                            <div className="col-2 card-shadow" style={editWidth}>
                                <div className="a-counter" >
                                        
                                </div>
                                <div className="col-2_img">
                                    <div className="col-2_img-image" >
                                        {imageContent}
                                    </div>
                                    
                                </div>
                                <div className="col-2_text">
                                    <p><strong>{cardTitle} </strong></p>
                                    {progressBar}
                                    {/* <p>{card.subtitle}</p> */}
                                    <br/>
                                    
                                </div>
                                
                            </div>
                        )
                    })
                }

                

                
            </div>
        </div>
    </div>
  )
}

export default Achievements