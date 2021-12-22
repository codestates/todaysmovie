import React, { useState } from "react";
import './RandomBtn.css';
import Modal from "../component/Modal";


export default function RandomBtn ({ openModal }) {


  return (
<div onClick={openModal}>
<a href="#" className="float">
<i className="fas fa-random fa-2x"></i>
</a>
<div className="label-container">
<div className="label-text">RANDOME MOVIE</div>
<i className="fa fa-play label-arrow"></i>
</div>
</div>
  )
}