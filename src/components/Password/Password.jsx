import {useState} from 'react';

function ShowPassword(){
    const [inputType, setInputType] = useState('password');
    const handleclick = () => {
        if(inputType === 'password'){
            setInputType('text');
        }else{
            setInputType('password');
        }
    }
    const buttonText = inputType === 'password' ? 'show' : 'hide';

    return (
        <>
            <input type={inputType}></input>
            <button onClick={handleclick}>{buttonText}</button>
        </>
    )
}

export default ShowPassword;