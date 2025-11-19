import React, { useState } from "react";

export default function TextForm(props) {

  const handleClick = ()=>{
    console.log('ON Click');
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleChange = (event)=>{
    console.log('OnChange');
    setText(event.target.value);
  }
  const [text,setText] = useState('Varun');
  return (
    <>
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
    <div className="container my-4">
      <h1>Text Summary</h1>
      <p>{text.split(' ').length}words,{text.length}charecters</p>
    </div>
    </>
  );
  
}
