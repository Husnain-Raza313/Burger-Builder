import React from 'react';
import '../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../firebase-config';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  let navigate = useNavigate();

  const register = async () => {
    try{
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    navigate("/");
    } catch(error){
      alert(error.message);
    }
  };
  const login = async () => {

    try{
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("email", user._tokenResponse.email);
      console.log(user._tokenResponse.email);
      navigate("/");
      } catch(error){
        alert(error.message);
      }

  };
  return (
    <div className='container'>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" onChange={(event)=>{
          console.log(user);
          setEmail(event.target.value);
        }} placeholder="Enter email" />
      </div>
      <div className='mb-5'>
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" onChange={(event)=>{setPassword(event.target.value);}} placeholder="Password" />
      </div>
      <button onClick={register} class="btn btn-primary mr-2">Register</button>
      <button class="btn btn-dark" onClick={login}>Login</button>

    </div>
  )
}

export default Form
