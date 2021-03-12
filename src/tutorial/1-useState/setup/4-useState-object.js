import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: 'Ahmed', age:20, message:'Hello world'})
  const changeMessage = () =>{
    setPerson({...person, message:'New message'})
  }
  return <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.message}</h3>
  <button className='btn' onClick={changeMessage}>Change message</button>
  </>;
};

export default UseStateObject;
