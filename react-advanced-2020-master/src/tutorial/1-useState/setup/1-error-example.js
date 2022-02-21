import React, { useState } from 'react';

const ErrorExample = () => {
  const[text,setText]=useState("Random Title")
  const eventhandler=()=>{
    if (text==="Random Title"){
      setText("hello")
    }
    else{
      setText("Random Title")
    }
   
  }
 return <div>
  <h1>Usestate example</h1>
  <h1>{text}</h1>
  <button className='btn' onClick={eventhandler}>Change title</button>
  </div>
}
export default ErrorExample;
