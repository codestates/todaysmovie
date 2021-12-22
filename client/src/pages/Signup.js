import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Signup.css";

axios.defaults.withCredentials = true;

export default function Signup () {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    username: '',
    mobile: '',
  });

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  const navigate = useNavigate();

  function handleClicktoLoginpage() {
    if (userInfo.email && userInfo.password && userInfo.username && userInfo.mobile) {
      axios.post('http://localhost:4000/signup',{
        email: userInfo.email,
        password: userInfo.password,
        username: userInfo.username,
        mobile: userInfo.mobile
      })
      navigate("/");
    
    }
    
  }

  return (
    <form className="signup">
      <h3>SIGN UP</h3>
      <label className="email">EMAIL</label>
      <input type="text" placeholder="Email" id="email" onChange={handleInputValue('email')}/>
      <label className="password">PASSWORD</label>
      <input type="password" placeholder="Password" id="password" onChange={handleInputValue('password')}/>
      <label className="username">USERNAME</label>
      <input type="text" placeholder="Username" id="username" onChange={handleInputValue('username')}/>
      <label className="mobile">MOBILE</label>
      <input type="text" placeholder="Phone number" id="mobile" onChange={handleInputValue('mobile')}/>
      <button onClick={handleClicktoLoginpage}>SIGN UP</button>
    </form>
  )
}
