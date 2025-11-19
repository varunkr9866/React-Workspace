import React, { useState } from "react";

export default function TextForm(props) {
  const [text,setText] = useState('');
  const handleClick = ()=>{
    
  }
  const handleChange = ()=>{
    
  }
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          onChange={handleChange}
          value={text}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className='btn btn-primary' onClick={handleClick}>
        Convert To UpperCase
      </button>
      </div>
    </div>
  );
  
}
