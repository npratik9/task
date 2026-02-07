import { useState } from "react";
import api from "../config/axios"
import { useNavigate } from "react-router-dom";
import "../styles/auth.css"

const Login=() =>{
    const navigate= useNavigate()
    const submitHandler =async(e)=>{
        // console.log("Submit Clicked");
        e.preventDefault()
        
        try{
            if(!email || !password){
                return alert("Enter some data")
            }
            const res= await api.post("/login", {email,password})
            // console.log(res.data)
            const msg= res.data.message;
            const jwtToken = res.data.data;
            if(msg==="Invalid Credentials"){
                return alert("Invalid Password");
            }
            
            
            if(!jwtToken){
                return alert("user not registered")
                
            }
            
            localStorage.setItem("token",jwtToken)
            // console.log(localStorage.getItem("token"));
            navigate("/dashboard")
            
            
        } catch(exception){
            console.log(exception.response?.data);
            alert("login failed")
        }
    }

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
   
      return (
        <div className="auth-container">
          <h2>Login</h2>
          <form onSubmit={submitHandler}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button type="submit">Login</button>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Don't have an account? <a href="/register">Register</a>
            </p>
          </form>
        </div>
      );
}

export default Login