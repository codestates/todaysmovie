import React from "react";
import SingleMovieEntry from "./SingleMovieEntry";

export default function SingleMovie ({ movies }) {

  return (
    <div className="nomovieContainer">
      <div className="mainpage_nomovie"></div>
      <span className="nomovie">
      {
        movies.length > 0 ? movies.map((el) => 
          (
            <SingleMovieEntry movie={el} />
          )
        ) : "영화를 선택해주세요" }
      </span>
    </div>
  )
}