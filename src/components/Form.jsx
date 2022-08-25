import React from 'react';
import '../firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth} from '../firebase-config';
import { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
  });
  const register = async () => {
    try{
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    } catch(error){
      console.log(error.message);
    }
  };
  const login = async () => {

    try{
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      } catch(error){
        console.log(error.message);
      }

  };
  const logout = async () => {
    await  signOut(auth);
  };
  return (
    <div className='container'>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" onChange={(event)=>{
          setEmail(event.target.value);
        }} placeholder="Enter email" />
      </div>
      <div>
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" onChange={(event)=>{setPassword(event.target.value);}} placeholder="Password" />
      </div>
      <button onClick={register} class="btn btn-primary mb-5">Register</button>
      <br/>
      <button class="btn btn-dark">Register</button>
      <button class="btn btn-dark">Login</button>

    </div>
  )
}

export default Form
