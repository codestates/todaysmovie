import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";

axios.defaults.withCredentials = true;

export default function Login ({handleResponseSuccess}) {
  
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = () => {
    if (loginInfo.email && loginInfo.password) {
      axios.post('https://localhost:4000/login', {
        email: loginInfo.email,
        password: loginInfo.password
      })
      .then(handleResponseSuccess)
    } else {

    }
    
  } 

  
  return (
    <div className="loginContainer">
        <div className="login">LOGIN</div>
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
        <div className="loginBtnContainer">
          <button className="loginBtn" onClick={handleLogin}>LOGIN</button>
        </div>
        <div className="signupBtnContainerLogin">
          <button className="signupBtnLogin"><Link to='/signup'>SIGN UP</Link></button>
        </div>
    </div>
  )
}


