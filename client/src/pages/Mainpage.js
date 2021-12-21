import React, { useEffect, useState } from "react";
import "./Mainpage.css";

import mockMovie from "../static/mockMovie";

import SingleMovie from "../component/SingleMovie";
import RandomBtn from "../component/RandomBtn";

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

  return (
    <>
    <span className="body">
      <SingleMovie movies={mockMovie}/>
    </span>
    <div>
      <RandomBtn />
    </div>



    </>
  )
}