import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Myprofile from "./component/Myprofile";
import Mainpage from "./component/Mainpage";
import Mainpage_nomovie from "./component/Mainpage_nomovie";

export default function App () {
  const [hasMovie, setHasMovie] = useState(false);

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
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/myprofile" element={<Myprofile />} />
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

