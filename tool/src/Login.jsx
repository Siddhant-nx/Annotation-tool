import React, { useState } from "react";
import uni from './uni.jpg'
import logo from './logo.png'
import './App.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    navigate('/Home.jsx')
  };

  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <img src={uni} alt="background" className="bg-image" />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="eg:- abc@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="eg:- abc#123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="Home.jsx" id="forgot-pas">Forgot password?</a>
          </div>
          <button type="submit" className="reg-btn">LOGIN</button>
          <a href="/Register.jsx">Register now</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
