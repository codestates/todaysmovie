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
  const navigate = useNavigate();
  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };
  const handleSignup = () => {
    navigate('/')
  }
  return (
    <div className="signupContainer">
      <div className="signup">SIGN UP</div>
      <div className="inputField">
        <div>
          <div>E-MAIL</div>
          <input name="userId" type="text" onChange={handleInputValue('email')}></input>
        </div>
      </div>
      <div className="inputField">
        <div>
          <div>PASSWORD</div>
          <input name="password" type="password" onChange={handleInputValue('password')}></input>
        </div>
      </div>
      <div className="inputField">
        <div>
          <div>USERNAME</div>
          <input name="username" type="text" onChange={handleInputValue('username')}></input>
        </div>
      </div>
      <div className="inputField">
        <div>
          <div>MOBILE</div>
          <input name="mobile" type="text" onChange={handleInputValue('mobile')}></input>
        </div>
      </div>
      <div className="signupBtnContainer">
        <button className="signupBtn" onClick={handleSignup}>SIGN UP</button>
      </div>
    </div>
  )
}
