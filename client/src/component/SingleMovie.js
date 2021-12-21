import React from "react";
import SingleMovieEntry from "./SingleMovieEntry";
import "./SingleMovie.css";

export default function SingleMovie ({ movies }) {

  return (
    <span className="singleMovieContainer">
      <span className="singleMovieSpan">
      {
        movies.length > 0 ? movies.map((el) => 
          (
            <SingleMovieEntry movie={el} key={el.id} />
          )
        ) : "영화를 선택해주세요" }
      </span>
    </span>
  )
}