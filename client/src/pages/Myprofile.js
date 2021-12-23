import React from "react";
import { useNavigate } from "react-router";
import "./Myprofile.css";




export default function Myprofile () {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/')
  }



  return (
    <form>
      <h3>MY PROFILE</h3>
      <label className="email">EMAIL</label>
      <span className="myprofileinfo" id="email">{'rkems0122@gmail.com'}</span>
      <label className="username">USERNAME</label>
      <span className="myprofileinfo" id="username">{'poru'}</span>
      <label className="mobile">MOBILE</label>
      <span className="myprofileinfo" id="mobile">{'010-9737-0645'}</span>
      <button onClick={handleLogout}>LOGOUT</button>
    </form>
  )
}