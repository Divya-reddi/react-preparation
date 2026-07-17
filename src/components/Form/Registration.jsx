import React from 'react';
import { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormdata] = useState({
        "Name": "",
        "Email": "",
        "Age": "",
        "course": "",
        "password": "",
        "confirmPassword": "",
        "checkboxStatus":false
    })
    const [checkboxError,setCheckboxError]=useState()

    const changeCheckbox=(event)=>{
        if (event.target.checked){
            setCheckboxError('')
        }
        setFormdata({...formData,'checkboxStatus':event.target.checked})
        
    }

    const SaveInputs=(event)=>{
        setFormdata({
            ...formData,
            [event.target.name]: event.target.value,
            
        })
    }

    
    const submitForm = (event) => {
        event.preventDefault()
        console.log(event.target.checked)
        if (formData.checkboxStatus===false){
            console.log('Please check the checkbox')
            setCheckboxError('Please check the checkbox')
        }else{
            console.log('Registration Successful')
            setCheckboxError('')
        }
    }
    return (
        <form onSubmit={submitForm}>
            <h3>Student Registration</h3>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" onChange={SaveInputs}  name="Name" minLength={3} required/>
            <br/>
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" onChange={SaveInputs}  name="Email" required/>
            <br />
            <label htmlFor="age">Age: </label>
            <input id="age" type="number" onChange={SaveInputs} name="Age" minLength={18}/>
            <br />
            <label htmlFor="course">Course: </label>
            <input id="course" type="text" onChange={SaveInputs} name="course" required/>
            <br />
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" onChange={SaveInputs} name="password" required minLength={6}/>
            <br />
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input id="confirmPassword" type="password" onChange={SaveInputs} name="confirmPassword"/>
            <br />
            <input id="terms" type="checkbox" onChange={changeCheckbox} name="checKBoxStatus" />
            <label htmlFor="terms">I Accept Terms & Conditions</label>
            {checkboxError===''?<br/>:<p style={{color:'red'}}>{checkboxError}</p>}
            <button type="sumbit">Register</button>
        </form>
    )
}
export default RegistrationForm;