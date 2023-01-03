import React, { useState } from 'react'
import "./LinkInput.css"

const LinkInput = ({setInputValue}) => {
    const [value, setValue] = useState("");

    const handleClick = ()=> {
        setInputValue(value);
        setValue("");
    }
  return (
    <div className='linkInput'>
      <h1>Url <span> Shortener </span></h1>
      <div className='inner'>
        <input 
            type="text"
            placeholder="Paste a Url link to Shorten It."
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            />
        <button onClick={handleClick}>Shorten</button>
      </div>  
    </div>
  )
}

export default LinkInput
