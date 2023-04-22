import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate()
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    console.log(e)
    e.preventDefault();
    const host = 'http://localhost:5000'
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json)
    if (json.success) {
      // redirect 
      console.log(json.authToken)
      localStorage.setItem('token', json.authToken);
      props.showAlert("Account Login Successfully", "success")
      navigate('/')
    }
    else {
      props.showAlert("Invalid Credentials", "danger")
    }
  }
  return (
    <div>
      <div className="mt-3">
        <h1>Login to Continue</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" >Email address</label>
          <input type="email" className="form-control" id="email" value={credentials.email} name="email" onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}
