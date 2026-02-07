import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../config/axios';

export const Register = () => {
    const navigate= useNavigate();
    const [form, setForm]= useState({
        email:"",
        password:"",
        confirmPassword:""
    })

    const handleChange= (e) =>{
        setForm({
            ...form,
           [e.target.name]: e.target.value
        })
    }

    const submitHandler= async(e) =>{
        e.preventDefault()

        if(form.password!==form.confirmPassword){
            return alert("password and confirm password should be same")
        }

        try{
            const res= await api.post("/register", form)
            console.log(res.data)
            navigate("/login")
        } catch(exception){
            alert((exception.response?.data?.message || "Registration failed"))
        }
    }
  return (
    <div className='auth-container'>
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}/><br />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange}/><br />
        <input type="password" name="confirmPassword" placeholder="ConfirmPassword" value={form.confirmPassword} onChange={handleChange}/><br />
        <button type="submit">register</button>
        <p style={{ textAlign: "center", marginTop: "10px" }}>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
}

export default Register