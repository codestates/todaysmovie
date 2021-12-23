import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
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


  const navigate = useNavigate();

  function handleClicktoMainpage() {
    if (loginInfo.email && loginInfo.password) {
      axios.post('http://localhost:4000/login', {
        email: loginInfo.email,
        password: loginInfo.password,
      })
      .then(navigate('/mainpage'))

    } else {
      alert('이메일과 비밀번호를 확인하세요')
    }
  }

  function handleClicktoSignuppage() {
    navigate("/signup");
  }
  
  return (
    <form>
      <h3>LOGIN</h3>
      <label className="username">EMAIL</label>
      <input type="text" placeholder="Email" id="username" onChange={handleInputValue('email')}/>
      <label className="password">PASSWORD</label>
      <input type="password" placeholder="Password" id="password" onChange={handleInputValue('password')}/>
      <button onClick={handleClicktoMainpage}>LOGIN</button>
      <button onClick={handleClicktoSignuppage}>SIGN UP</button>
    </form>
  )
}


