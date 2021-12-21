import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Signup.css";

axios.defaults.withCredentials = true;

export default function Signup () {
  // const [userInfo, setUserInfo] = useState({
  //   email: '',
  //   password: '',
  //   username: '',
  //   mobile: '',
  // });
  // const navigate = useNavigate();
  // const handleInputValue = (key) => (e) => {
  //   setUserInfo({ ...userInfo, [key]: e.target.value });
  // };
  // const handleSignup = () => {
  //   navigate('/')
  // }

  const navigate = useNavigate();

  function handleClicktoLoginpage() {
    navigate("/");
  }

  return (
    <form className="signup">
      <h3>SIGN UP</h3>
      <label className="email">EMAIL</label>
      <input type="text" placeholder="Email" id="email" />
      <label className="password">PASSWORD</label>
      <input type="password" placeholder="Password" id="password" />
      <label className="username">USERNAME</label>
      <input type="text" placeholder="Username" id="username" />
      <label className="mobile">MOBILE</label>
      <input type="text" placeholder="Phone number" id="mobile" />
      <button onClick={handleClicktoLoginpage}>SIGN UP</button>
    </form>
  )
}
