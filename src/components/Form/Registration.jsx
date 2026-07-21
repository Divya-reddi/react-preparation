import React from 'react';
import { useState, useRef, useEffect } from 'react';

function RegistrationForm() {
    const [formData, setFormdata] = useState({
        "Name": "",
        "Email": "",
        "Age": "",
        "course": "",
        "password": "",
        "confirmPassword": "",
        "checkboxStatus":false,
        "focus":false
    })

    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])


    const SaveInputs=(event)=>{
        const{type,name,value,checked} =event.target
        if (type==='checkbox'){
            setFormdata({
                ...formData,[name]:checked
            })
        }else{
            setFormdata({
                ...formData,[name]:value
            })
        }
    }

    
    const submitForm = (event) => {
        event.preventDefault()
        const {Name,Age,password,confirmPassword,checkboxStatus}=formData
        if (Name.length<3){
            console.log('Name should contain at least 3 characters')
        }
        else if(parseInt(Age)<18){
            console.log('Age should be above 18')
        }
        else if(password.length<6 || confirmPassword.length<6){
            console.log('minimum 6 characters Required')
        }
        else if (password!==confirmPassword){
            console.log('Passwords do not match')
        }
        else if(!checkboxStatus){
            console.log('Please accept Terms & Conditions')
        }
        else{
            console.log(`Welcome ${formData.Name} 🎉`)
            console.log(formData)
            setFormdata({
                "Name": "",
                "Email": "",
                "Age": "",
                "course": "",
                "password": "",
                "confirmPassword": "",
                "checkboxStatus": false
            })


        }
    }


    return (
        <form onSubmit={submitForm}>
            <h3>Student Registration</h3>
            <label htmlFor="name">Name: </label>
            <input ref={inputRef} id="name" type="text" onChange={SaveInputs}  name="Name" value={formData.Name} required/>
            <br/>
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" onChange={SaveInputs}  name="Email" value={formData.Email} required/>
            <br />
            <label htmlFor="age">Age: </label>
            <input id="age" type="number" onChange={SaveInputs} name="Age" value={formData.Age}/>
            <br />
            <label htmlFor="course">Course: </label>
            <input id="course" type="text" onChange={SaveInputs} name="course" value={formData.course} required/>
            <br />
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" onChange={SaveInputs} name="password" value={formData.password} required/>
            <br />
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input id="confirmPassword" type="password" onChange={SaveInputs} value={formData.confirmPassword} name="confirmPassword"/>
            <br />
            <input id="terms" type="checkbox" onChange={SaveInputs} name="checkboxStatus" checked={formData.checkboxStatus}/>
            <label htmlFor="terms">I Accept Terms & Conditions</label>
            <button type="submit" disabled={!formData.checkboxStatus}>Register</button>
        </form>
    )
}
export default RegistrationForm;