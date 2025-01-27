import React, { useState } from 'react';

const UseStateBasics = () => {
  //console.log(useState("hello world"))

  const [text, setText] = useState("random title")

  const handleClick = () =>{
    if (text === "random title"){
     setText("Hello world")
    }
    else{
      setText("random title")
    }
    
  }
  return (
   <React.Fragment>
     <h1>{text}</h1>
     <button className="btn" onClick ={handleClick}>Change Title</button>
   </React.Fragment>
  )
};

export default UseStateBasics;
