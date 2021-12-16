import React, { Component } from "react";
import "./Myprofile.css";

class Myprofile extends Component {

  render () {
    return (
      <div className="myprofileContainer">
        <div className="myprofile">My Profile</div>
        <div className="info">
          <div>
            <div>E-MAIL</div>
            <span>나의 이메일: </span>
          </div>
        </div>
        <div className="info">
          <div>
            <div>USERNAME</div>
            <span>나의 이름: </span>
          </div>
        </div>
        <div className="info">
          <div>
            <div>MOBILE</div>
            <span>나의 연락처: </span>
          </div>
        </div>
        <div className="myprofileBtnContainer">
          <button className="myprofileBtn">UPDATE PROFILE</button>
        </div>
        <hr color="black"></hr>
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