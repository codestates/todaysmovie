import React from "react";
import ReactModal from "react-modal";
import "./Modal.css";
import mockMovie from "../static/mockMovie";

import * as closeModal from "../pages/Mainpage.js";
// const isClosed = closeModal.closeModal();

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const randomMovie = randomItem(mockMovie);

const Modal = ({ isOpen }) => {

    
  return (
    <>
    <ReactModal style={customStyles} isOpen={isOpen}>
      <div>
      <img className="modal-moviePoster" src={randomMovie.moviePoster} />
      </div>
      <div className="modal-movieName">오늘의 영화는 &lt;{randomMovie.movieName}&gt; 입니다.</div>
      <div className="modal-tag-list">
          {randomMovie.movieGenre.map((genre) => {
            return <div className="modal-tag" key={genre}>{genre}</div>
          })}</div>
      <span className="modal-infoColumn">
        <p className="movieRating">Rating: {randomMovie.movieRating}</p>
        <p className="movieRunningtime">Running time: {randomMovie.movieRunningtime} min</p>
      </span>
        <div className="modal-movieDesc-container">
          <div className="modal-movieDesc">{randomMovie.movieDesc}</div>
        </div>
      <button className="modal-button" onClick={closeModal}>CLOSE</button>
    </ReactModal>
    </>
  );
};

export default Modal;
