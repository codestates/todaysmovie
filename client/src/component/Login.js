import React, { Component } from "react";
import "./Login.css";

class Login extends Component {

  render () {
    return (
      <div className="loginContainer">
          <div className="login">LOGIN</div>
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
          <div className="loginBtnContainer">
            <button className="loginBtn">LOGIN</button>
          </div>
          <div className="signupBtnContainerLogin">
            <button className="signupBtnLogin">SIGN UP</button>
          </div>
      </div>
    )
  }
}

export default Login;