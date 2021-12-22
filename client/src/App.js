import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import ProfileBtn from "./ProfileBtn.js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Myprofile from "./pages/Myprofile";
import Mainpage from "./pages/Mainpage";
import axios from "axios";


export default function App () {
  
  const [isLogin, setIsLogin] = useState(false);

  //const navigate = useNavigate();
  const isAuthenticated = () => {}
  


  useEffect(()=> {
    isAuthenticated();
  },[]);
  /*
  
  const [userInfo, setUserInfo] = useState(null);
  
  
  

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
            <Search />
            <ProfileBtn />
          </div>
          <nav>


          <div className="body">
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
            <Route path="/" element={<Login isLogin={isLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/myprofile" element={<Myprofile />} />
            <Route path="/mainpage" element={<Mainpage />} />
          </Routes>
          
          </div>
          </nav>
        </div>
      </BrowserRouter>
    );
  }

