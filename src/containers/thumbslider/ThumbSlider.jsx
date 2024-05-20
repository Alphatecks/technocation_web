// import React, { useState } from 'react';
// import './thumbslider.css'; // You can style this component as per your need

// const ThumbSlider = () => {
//   const [value, setValue] = useState(50); // Initial value

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <div className="thumb-slider">
//       <input
//         type="range"
//         min={0}
//         max={100}
//         value={value}
//         onChange={handleChange}
//       />
//       <span className="slider-value" style={{ left: `calc(${value}% + 4px)` }}>
//         {value}
//       </span>
//     </div>
//   );
// };

// export default ThumbSlider;


import React, { useState } from 'react';
import './thumbslider.css'; // You can style this component as per your need

const ThumbSlider = () => {
  const [value, setValue] = useState(50); // Initial value

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="thumb-slider">
      <input
        name='thumbSlider'
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
        style={{ background: `linear-gradient(to right, #6f55d4 ${value}%, #d3d3d3 ${value}%)` }}
      />
      <label htmlFor='thumbSlider' className="slider-value" style={{ left: `calc(${value}% )` }}>
        {value}
      </label>
    </div>
  );
};

export default ThumbSlider;

