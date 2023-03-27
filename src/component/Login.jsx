import React, { useState } from 'react'
import axios from 'axios';
const Signup = () => {
  const [data,setdata]=useState({
    email:"",
    password:"",
  })

  const InputHandle=(e)=>{
setdata({...data,[e.target.name]:e.target.value})
  
  }
  const Handleform=(e)=>{
  e.preventDefault()
  console.log(data)
  }

  const Registaion=async(obj)=>{
    try {
       const res= await axios.post("https://rich-puce-binturong.cyclic.app/user/LOGIN",obj)
       if(res.status==200){
           console.log(res.data)
           localStorage.setItem("token",res.data)
       }
    } catch (error) {
       console.log(error)
    }
   }  
  const { name,
  email,
  gender,
  password,
  age,
  city,
  is_married}=data




  return<>
  <h4>Registation</h4>
  <form onSubmit={Handleform}>

    <input type="text" name="email" value={email} onChange={InputHandle}/>
   
    <input type="password" name="password" value={password} onChange={InputHandle}/>
  
   <button type='submit'>Submit</button>
  </form>
  </>
}

export default Login