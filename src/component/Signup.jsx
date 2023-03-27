import React, { useState } from 'react'
import axios from 'axios';
const Signup = () => {
  const [data,setdata]=useState({
        name:"",
    email:"",
    gender:"",
    password:"",
    age:0,
    city:"",
    is_married:false,
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
       const res= await axios.post("https://rich-puce-binturong.cyclic.app/user/registation",obj)
       if(res.status==200){
           console.log(res.data)
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
    <input type="text" name="name" value={name} onChange={InputHandle}/>
    <input type="text" name="email" value={email} onChange={InputHandle}/>
    <input type="text" name="gender" value={gender} onChange={InputHandle}/>
    <input type="password" name="password" value={password} onChange={InputHandle}/>
    <input type="number" name="age" value={age} onChange={InputHandle}/>
    <input type="text" name="city" value={city} onChange={InputHandle}/>
   <button type='submit'>Submit</button>
  </form>
  </>
}

export default Signup