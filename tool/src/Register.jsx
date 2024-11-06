import React, { useState } from "react";
import uni from './uni.jpg'
import logo from './logo.png'
  // Assuming the CSS is still applicable

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Annotator");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);
  };

  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <img src={uni} alt="background" className="bg-image" />
      <div className="login-container">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Annotator">Annotator</option>
            <option value="Contributor">Contributor</option>
          </select>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="uname"
              placeholder="eg:- John Wick"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
             </div>
             <div className="form-group">
            <label htmlFor="confirm-password">Re-enter Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="eg:- abc#123"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="reg-btn">REGISTER</button>
          <a href="/Login.jsx">Login</a>
        </form>
      </div>
    </div>
  );
};

export default Register;
