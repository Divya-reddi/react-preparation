import {useState} from 'react';

function GetResult() {

    const [score, setScore] = useState(0);
    const handleChange = (event) => {
        setScore(event.target.value);
    }
    const [result, setResult] = useState();
    const handleClick = () => {
        if (score >= 90){
            setResult('A+');
        }else if(score<90 && score >=70){
            setResult('Distinction');
        }else if(score<70 && score >=50){
            setResult('pass');
        }else{
            setResult('fail');
        }
    }
    return (
        <>
            <input type="text" placeholder='Enter your score' onChange={handleChange}></input>
            <button onClick = {handleClick}>Equivalent Grade</button>
            <p>{result}</p>
        </>
    )
}
export default GetResult;