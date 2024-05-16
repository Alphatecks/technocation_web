import React from 'react'
import "./card.css"

const Card = () => {
    const cards = [ 
        {image:"https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY", topic:"UX Research", name:"Chris Kinley" },
        {image:"https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I", topic:"UX Essentials", name:"Hemsworth Morgan" },
        {image:"https://fastly.picsum.photos/id/250/200/300.jpg?hmac=igVdxs-AgITpHwPAZ80mpAfmhrGBvN_xThJlhp7vOqE", topic:"UI for Beginners", name:"Freeman Stark" },
        {image:"https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I", topic:"How to UX ?", name:"Tony Parker" }
    ];

  return (
    <div>
        <div className="card-container">
            
            
            <div className="row card-container_row">

                {
                    cards.map((card, index)=> {

                        return(
                            <div className="col">
                                <div className="card-container_row_image" style={{backgroundImage:`url(${card.image})`}} >
                                    
                                </div>
                                <div className="card-container_row_details">
                                    <p><strong>{card.topic}</strong></p>
                                    <p className="subtitle">{card.name}</p>
                                </div>
                            </div>
                        );
                        
                    })
                }
                




                {/* <div className="col">
                    <div className="card-container_row_image">
                        <img src={""} alt="" />
                    </div>
                    <div className="card-container_row_details">
                        <p><strong>UX Research</strong></p>
                        <p className="subtitle">Chris Kinley</p>
                    </div>
                </div>

                <div className="col">
                    <div className="card-container_row_image">
                        <img src={""} alt="" />
                    </div>
                    <div className="card-container_row_details">
                        <p><strong>UX Research</strong></p>
                        <p className="subtitle">Chris Kinley</p>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Card