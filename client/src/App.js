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
  // const [hasMovie, setHasMovie] = useState(false);
  /*
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = () => {
    axios.get('https://localhost:4000/myprofile')
    .then(res => {
      if (res.data.data.userInfo) {
        const {email, mobile, username} = res.data.data.userInfo;
        setUserInfo( {
          email,
          mobile,
          username,
        });
        setIsLogin(true);
        navigate('/myprofile')
      } else {
        setUserInfo(null)
      }
    })
  }
  const handleResponseSuccess = () => {
    isAuthenticated();
  }
  const handleLogout = () => {
    axios.post('https://localhost:4000/logout').then(res => {
      setUserInfo(null);
      setIsLogin(false);
      navigate('/')
    });
  }

  useEffect(()=> {
    isAuthenticated();
  },[]);
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
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/myprofile" element={<Myprofile />} />
            <Route path="/mainpage" element={<Mainpage />} />
          </Routes>
          
          </nav>
        </div>
      </BrowserRouter>
    );
  }

