import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {

  render () {
    return (
      <div className="signupContainer">
        <div className="signup">SIGN UP</div>
        <div className="inputField">
          <div>
            <div>E-MAIL</div>
            <input name="userId" type="text"></input>
          </div>
        </div>
        <div className="inputField">
          <div>
            <div>PASSWORD</div>
            <input name="password" type="password"></input>
          </div>
        </div>
        <div className="inputField">
          <div>
            <div>USERNAME</div>
            <input name="username" type="text"></input>
          </div>
        </div>
        <div className="inputField">
          <div>
            <div>MOBILE</div>
            <input name="mobile" type="text"></input>
          </div>
        </div>
        <div className="signupBtnContainer">
          <button className="signupBtn">SIGN UP</button>
        </div>
      </div>
    )
  }
}

export default Signup;