import React from 'react';
import { useState } from 'react';

function EligibilityCheck() {
    const [userInput, setUserInput] = useState();
    const handleChange = (event) => {
        setUserInput(event.target.value)
    }
    const [eligibility,eTC] = useState()
    const handleClick = () => {
        if (userInput>=18){
            eTC('Eligibile')
        }else{
            eTC('Not-Eligible')
        }
    }
    return (
        <>
            <input type="text" placeholder='Enter your age' onChange={handleChange}></input>
            <button onClick={handleClick}>Submit</button>
            <p>{eligibility}</p>
        </>
    )
}

export default EligibilityCheck;