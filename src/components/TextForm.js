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
    <div style={{color:props.mode ==='grey'?'white':'grey'}}>
      <div className="mb-3" style={{color:props.mode ==='grey'?'white':'grey'}} >
        <h1 >{props.heading}</h1>
        <textarea
          className="form-control"
          onChange={handleChange}
          style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black'}}
          value={text}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className='btn btn-primary' onClick={handleClick}>
        Convert To UpperCase
      </button>
      </div>
    </div>
    <div className="container my-4" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(' ').length}words,{text.length}charecters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
  
}
