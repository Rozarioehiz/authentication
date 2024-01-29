import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {


    const [fullName,setFullName]=useState()
    const [email,setEmail] = useState()
    const[confirmEmail,setConfirmEmail] =useState()
    const[phoneNumber,setPhoneNumber]=useState()
    const[password,setPassword] = useState ()
    const[comfirmpassword,setComfirmpassword]= useState()

const handleFullName =(e)=>{
    const newFullName =e.target.value
    setFullName(newFullName)
}
const handleemail =(e)=>{
    const newemail =e.target.value
    setEmail(newemail)
}
const handleComfirmEmail =(e)=>{
    const newComfirmEmai =e.target.value
    setConfirmEmail(newComfirmEmai)
}
const handlephonenumber =(e)=>{
    const newphonenumber =e.target.value
    setPhoneNumber(newphonenumber)
}
const handlepassword =(e)=>{
    const newpassword =e.target.value
    setPassword(newpassword)
}
const handleconfirmPassword =(e)=>{
    const newconfirmPassword =e.target.value
    setComfirmpassword(newconfirmPassword)
}


    const data={fullName,phoneNumber,email,password}

    const Url='https://chowfinder.onrender.com/api/sign-up'

    const HandleSummit = async (e)=>{
    e.preventDefault()
    try{
        const res = await axios.post(Url,data)
        console.log(res.data)
    }
    catch(error){
        console.log(error.message)
    }
}
        
  return (
    <div className='App'>
        <div className='Register'>
            <form onSubmit={HandleSummit}>
                <h1>Register</h1>
                <div className='divider'></div>

                <div className='theform'onSubmit={HandleSummit}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type='text' 
                        name='name' 
                        placeholder='FullName'
                        onChange={handleFullName}
                     
                        />
                      
                    </div>
                    
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type='email' 
                        name='email' 
                        placeholder='email'
                        onChange={handleemail} 
                     
                        />
                  

                    </div>

                    <div className="field">
                        <label>ConfirmEmail</label>
                        <input 
                        type='email' 
                        name='email' 
                        placeholder='Confirmemail' 
                     onChange={handleComfirmEmail}
                        />
                  

                    </div>
            
                   
                     
                  
                    <div className="field">
                        <label>phone number</label>
                        <input  
                        name='phonenumber' 
                        type='text'
                        placeholder='phone number' 
                        onChange={handlephonenumber}
                        />
                     

                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input 
                        type='password' 
                        name='password' 
                        placeholder='password'
                        onChange={handlepassword}
                       
                        />
                  

                    </div>
                    <div className="field">
                        <label>ConfirmPassword</label>
                        <input 
                        type='password' 
                        name='password' 
                        placeholder='comfirmpassword'
                        onChange={handleconfirmPassword}
                       
                        />
                  

                    </div>
                    
                    <button className='submitbtn' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}





export default App
