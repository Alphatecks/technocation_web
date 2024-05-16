import React from 'react'
import "./boxlayout.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BoxLayout = ( { title, text, style, children, button,logo, bgImage, boxStyle } ) => {
  return (
    <div className='boxlayout-container'>
        <div className="boxlayout-container_row row">
            <div className='boxlayout-container_row_col-2 small-col-2' style={boxStyle} >

                <div className="bg-image">
                    {bgImage}
                </div>
                <div className="edit-padding" style={style}>
                <div className="logo">
                    {logo}
                </div>
                
                <div className="boxlayout-container_row_col-2_title">
                    <div />
                    <h1>{title}</h1>
                </div>
                
                <div className="boxlayout-container_row_col-2_text">
                    <p>{text}</p>
                </div>
                <div/>
                <div className="boxlayout-container_button button">
                    { button }
                </div>
                </div>
                
            </div>
            <div className='boxlayout-container_row_col-2 big-col-2 edit-illustration'>
                { children }
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default BoxLayout