import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./App.css";
import axios from 'axios';

// Get Update and Delete all 3 API's

// import { Button } from 'react-bootstrap'
// const API_BASE = "https://kontests.net/api/v1/all";

export default function Login() {
  
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Make API call to login endpoint
    axios.post('/api/users/login', { email, password })
      .then(res => {
        // Handle successful login
        console.log(res.data);
      })
      .catch(err => {
        // Handle login error
        console.log(err.response.data);
      });
  };

  const handleSignup = () => {
    // Make API call to signup endpoint
    axios.post('/api/users/signup', { email, password })
      .then(res => {
        // Handle successful signup
        console.log(res.data);
      })
      .catch(err => {
        // Handle signup error
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <h1>Signup</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
