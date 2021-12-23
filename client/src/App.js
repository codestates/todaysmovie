import React, { useEffect, useState } from "react";
import { Navigate, BrowserRouter, Routes, Route  } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import ProfileBtn from "./ProfileBtn.js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Myprofile from "./pages/Myprofile";
import Mainpage from "./pages/Mainpage";
import axios from "axios";



 function App () {
  
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  
  const isAuthenticated = () => {
    axios.get('http://localhost:4000/myprofile')
    .then(res => {
      if (res.data.data.userInfo) {
        const {email, mobile, username} = res.data.data.userInfo
        setUserInfo({email, mobile, username});
        setIsLogin(true);
        <Navigate to='/mainpage'/>
      } else {
        setUserInfo(null)
      }
    })
  };
  
  const handleResponseSuccess = () => {
    isAuthenticated();
  };


  useEffect(()=> {
    isAuthenticated();
  },[]);

  const handleLogout = () => {
   
      <Navigate to='/'></Navigate>
    
  }
 
    return (
      <BrowserRouter>
        <div>
          <div className="header">
            <Header />
            <Search />
            <ProfileBtn />
          </div>
          <nav>

          <Routes>
            <Route path="/" element={<Login isLogin={isLogin} handleResponseSuccess={handleResponseSuccess}/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/myprofile" element={<Myprofile userInfo={userInfo} handleLogout={handleLogout} />} />
            <Route path="/mainpage" element={<Mainpage />} />
          </Routes>
          
          </nav>
        </div>
      </BrowserRouter>
    );
  }

export default App;