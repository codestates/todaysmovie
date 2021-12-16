import React, { Component } from "react";
import "./Myprofile.css";

class Myprofile extends Component {

  render () {
    return (
      <div className="myprofileContainer">
        <div className="myprofile">My Profile</div>
        <div className="info">
          <div>
            <div className="headfont">E-MAIL</div>
            <div className="tailfont">velvetredvelvet91@gmail.com</div>
          </div>
        </div>
        <div className="info">
          <div>
            <div className="headfont">USERNAME</div>
            <div className="tailfont">김혜영</div>
          </div>
        </div>
        <div className="info">
          <div>
            <div className="headfont">MOBILE</div>
            <div className="tailfont">010-1234-5678</div>
          </div>
        </div>
        <div className="myprofileBtnContainer">
          <button className="myprofileBtn">UPDATE PROFILE</button>
        </div>
        <div className="deleteContainer">
          <div className="deleteaccount">delete your account</div>
          <span className="deletemsg">Once your delete yoru account, there is no going back. Please be certain.</span>
        </div>
        <div className="deleteBtnContainer">
          <button className="deleteBtn">DELETE YOUR ACCOUNT</button>
        </div>
      </div>
    )
  }
}

export default Myprofile;