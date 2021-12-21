import React, { Component } from "react";
import "./Mainpage_nomovie.css";

class Mainpage_nomovie extends Component {

  render () {
    return (
      <div className="nomovieContainer">
        <div className="mainpage_nomovie">MAIN PAGE NO MOVIE</div>
        <div className="nomovie">영화를 선택해 주세요!</div>
        <div className="addmovieContainer">
          <button className="addmovieBtn">ADD MOVIE</button>
        </div>
      </div>
    )
  }
}

export default Mainpage_nomovie;