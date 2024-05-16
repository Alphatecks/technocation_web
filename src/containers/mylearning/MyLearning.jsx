
import "./mylearning.css"
import { FaBookmark } from "react-icons/fa";
import { useState } from "react"

const MyLearning = ( {displayStyle, editWidth, title, progressBar,buyButton}) => {

    const cards = [
        {image: "https://fastly.picsum.photos/id/250/200/300.jpg?hmac=igVdxs-AgITpHwPAZ80mpAfmhrGBvN_xThJlhp7vOqE", title: "Introduction to Design ", tutor:"Benjamin Frisker"},
        {image: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I", title: "Digital Marketing ", tutor:"Jordan Morgan"}
    ]

    const [bookmarks, setBookmarks] = useState(Array(cards.length).fill(false));

    const toggleBookmark = (index) => {
        setBookmarks(prevBookmarks => {
            const newBookmarks = [...prevBookmarks];
            newBookmarks[index] = !newBookmarks[index];
            return newBookmarks;
        });
    };
    
     
    return (
        <div className='myl-main-container' >
            <div className="myl-title"><h1>{title}</h1></div>
            <br />
            <div className="myl-content" style={displayStyle}>
                

                {
                    cards.map(( card, index) => {
                        return (
                            <div className="col-2 card-shadow" style={editWidth}>
                                <div className="myl-bookmark" onClick={() => toggleBookmark(index)}>
                                        <FaBookmark className='myl-bookmark-mark' size={18} style={{ color: bookmarks[index] ? '#8c12e3' : 'white' }} />
                                    </div>
                                <div className="col-2_img">
                                    <div className="col-2_img-image" style={{backgroundImage:`url(${card.image})`}} >
                                    </div>
                                    
                                </div>
                                <div className="col-2_text">
                                    <p><strong>{card.title}</strong></p>
                                    <p>{card.tutor}</p>
                                    <br/>
                                    {buyButton}
                                    {progressBar}
                                </div>
                                
                            </div>
                        )
                    })
                }

                

                
            </div>
        </div>
    )
}

export default MyLearning