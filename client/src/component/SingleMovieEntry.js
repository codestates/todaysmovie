import React from "react";
import "./SingleMovieEntry.css";

export default function SingleMovieEntry ({ movie }) {

const {movieName, moviePoster, movieRating, movieRunningtime, movieDesc, movieGenre} = movie;

  return (
    <div className="card">
      <div className="card-item" style={{ flex: 3 }}>
      <img src={moviePoster} />
      </div>
      <div style={{ flex: 7 }}>
        <h3 className="movieName">{movieName}</h3>
        <p className="movieRating">Rating: {movieRating}</p>
        <p className="movieRunningtime">Running time: {movieRunningtime}</p>
        <p className="movieDesc">{movieDesc}</p>
        <p>genres</p>
        <div className="tag-list">
          {movieGenre.map((genre) => {
            <div className="tag" key={genre}>{genre}</div>
        })}</div>
      </div>
    </div>



  )
}