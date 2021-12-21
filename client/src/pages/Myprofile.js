import React from "react";
import "./Myprofile.css";
import { useNavigate } from "react-router-dom";


export default function Myprofile () {

  const navigate = useNavigate();

  function handleClicktoMainpage() {
    navigate("/mainpage");
  }

  return (
    <form>
      <h3>MY PROFILE</h3>
      <label className="email">EMAIL</label>
      <span className="myprofileinfo" id="email">velvetredvelvet91@gmail.com</span>
      <label className="username">USERNAME</label>
      <span className="myprofileinfo" id="username">김혜영</span>
      <label className="mobile">MOBILE</label>
      <span className="myprofileinfo" id="mobile">010-1234-5678</span>
      <button onClick={handleClicktoMainpage}>CONFIRM MY PROFILE</button>
    </form>
  )
}