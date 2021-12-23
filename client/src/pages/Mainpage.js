import React, { useEffect, useState } from "react";
import mockMovie from "../static/mockMovie";
import SingleMovie from "../component/SingleMovie";
import RandomBtn from "../component/RandomBtn";

import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
import Modal from '../component/Modal';

export default function Mainpage () {
  // const [content, setContent] = useState(mockMovie);

  // const fetchTrending = async () => {
  //   const { data } = await axios.get(
  //     `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${process.env.REACT_APP_API_KEY}`
  //   );
    
  //   console.log(data);

  //   setContent(data.results);
  // };

  // useEffect(() => {
  //   fetchTrending();
  // }, []);

  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
    <span className="body">
      <SingleMovie movies={mockMovie}/>
    </span>
    <div>
    <RandomBtn openModal={openModal}></RandomBtn>
    <Modal isOpen={isOpen} onRequestClose={closeModal} />
    </div>
    </>
  )
}