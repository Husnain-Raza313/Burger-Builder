import React from 'react'
import './Form.css';

const Form = () => {
  return (
    <div className='container'>
      <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" class="btn btn-primary mb-5">Submit</button>
      <br/>
      <button class="btn btn-dark">Register</button>
    </form>

    </div>
  )
}

export default Form