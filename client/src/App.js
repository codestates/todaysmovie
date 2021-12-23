import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ProfileBtn from "./ProfileBtn.js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Myprofile from "./pages/Myprofile";
import Mainpage from "./pages/Mainpage";
import axios from "axios";

export default function App () {
  
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const isAuthenticated = () => {
    // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
    
  };
  
  const handleResponseSuccess = () => {
    isAuthenticated();
  };


  useEffect(()=> {
    isAuthenticated();
  },[]);
  /*
  
  
  
  
  

  const handleLogout = () => {
    axios.post('https://localhost:4000/logout').then(res => {
      setUserInfo(null);
      setIsLogin(false);
      navigate('/')
    });
  }


  */
 
    return (
      <BrowserRouter>
        <div>
          <div className="header">
            <Header />
            <ProfileBtn />
          </div>
          <nav>


            {/* <li>
            <Link to="/">LOGIN</Link>
            </li>
            <li>
            <Link to="signup">SIGN UP</Link>
            </li>
            <li>
            <Link to="myprofile">MY PROFILE</Link>
            </li>
            <li>
            <Link to="mainpage">MAIN PAGE</Link>
            </li> */}

            
          <Routes>
            <Route path="/" element={<Login isLogin={isLogin} handleResponseSuccess={handleResponseSuccess}/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/myprofile" element={<Myprofile />} />
            <Route path="/mainpage" element={<Mainpage />} />
          </Routes>
          
          </nav>
        </div>
      </BrowserRouter>
    );
  }

