// import React from "react";
import PropTypes from "prop-types";

import 'Movie.css';

// 추가 2. 사용하기 위해 prompt 에 추가
function Movie({ id, year, title, summary, poster, genres }) {
  // html처럼 보이지만 JSX라서 class 대신 className으로 사용
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h3 className="movie__year">{year}</h3>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li className="genres__genre" key={index}>{genre}</li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 200)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  // 추가 1. propTypes에 추가
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
  
};

// export해야 다른 jsdptj Movie라는 component를 사용 가능
export default Movie;