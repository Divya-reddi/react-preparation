import React,{useState,useRef,useEffect} from 'react';

function UseRefHook(){
    const inputRef=useRef()
    const [count,setCount]=useState(0)
    const prevCount=useRef('-')  

    const focusClicked= ()=>{
        inputRef.current.focus()
    }

    const incrementClicked=()=>{
        setCount(count+1);

    }

    useEffect(()=>{
        console.log(`Previous : ${prevCount.current}`);
        prevCount.current=count;
        console.log(`Current : ${count}`)
    },[count])



    return (
        <>
            <p>Current Count : {count}</p>
            <p>Previous Count : {prevCount.current}</p>
            <input ref={inputRef} placeholder='Enter Your Name'/>
            <br/>
            <button onClick={focusClicked}>Focus Input</button>
            <br/>
            <button onClick={incrementClicked}>Increment</button>
        </>
    )
}

export default UseRefHook
