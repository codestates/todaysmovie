import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Myprofile from "./component/Myprofile";
import Mainpage from "./component/Mainpage";
import Mainpage_nomovie from "./component/Mainpage_nomovie";
import axios from "axios";


export default function App () {
  const [hasMovie, setHasMovie] = useState(false);
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
          </div>
          <nav>

          <div className="body">
            <li>
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
            </li>
            <li>
            <Link to="mainpage_nomovie">MAIN PAGE NO MOVIE</Link>
            </li>

          <Routes>
            <Route path="/" element={<Login 

              />} 
            />
            <Route path="/signup" element={<Signup 
              
              />} 
            />
            <Route path="/myprofile" element={<Myprofile 
              
              />} 
            />
            <Route path="/mainpage" element={<Mainpage />} />
            <Route path="/mainpage_nomovie" element={<Mainpage_nomovie />} />
          </Routes>
            
          </div>
          </nav>

        </div>
      </BrowserRouter>

    //   <div>
    //   <Routes>
    //     <Route path='/'element={<Login />}>
    //       <Login />
    //     </Route>
    //     <Route path='/signup' element={<Signup />}>
    //       <Signup />
    //     </Route>
    //     <Route path='/myprofile' element={<Myprofile />}>
    //       <Myprofile />
    //     </Route>
    //     <Route path='/mainpage' element={<Mainpage />}>
    //       <Mainpage />
    //     </Route>
    //     <Route path='/mainpage_nomovie' element={<Mainpage_nomovie />}>
    //       <Mainpage_nomovie />
    //     </Route>
    //     <Route path='/'>
    //       {hasMovie ? <Navigate to='/mainpage' /> : <Navigate to='/mainpage_nomovie' />}
    //     </Route>
    //   </Routes>
    // </div>
    );
  }

