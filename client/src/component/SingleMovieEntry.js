import React from "react";
import "./SingleMovieEntry.css";

export default function SingleMovieEntry ({ movie }) {

const {movieName, moviePoster, movieRating, movieRunningtime, movieDesc, movieGenre} = movie;

return (
  <div className="card">
      <div className="card-item">
      <img src={moviePoster} />
      </div>
      <div >
        <h3 className="movieName">{movieName}</h3>
        <span className="infoColumn">
        <p className="movieRating">Rating: {movieRating}</p>
        <p className="movieRunningtime">Running time: {movieRunningtime}</p>
        </span>
        <div className="tag-list">
          {movieGenre.map((genre) => {
            return <div className="tag" key={genre}>{genre}</div>
          })}</div>
      </div>
        <p className="movieDesc">{movieDesc}</p>
    </div>
  )
}