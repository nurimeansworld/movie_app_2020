import React from "react";
import axios from "axios";
import Movie from "./Movie";

import './App.css';
class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {

    // // 1. 직관적인 선언
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); 
    // console.log(movies.data.data.movies);

    // 2. ES6 속성 사용
    const {
      data:{
        data:{movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json"); 
    
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }


  
  render() {
    const { isLoading , movies} = this.state;
    return (
      <div>{
      isLoading
      // html처럼 보이지만 JSX라서 class 대신 className으로 사용
      ? (<div className="loader"><span className="loader__text">Loading...</span></div>)
      : (<div className="movie">
        {movies.map( movie => (
        <Movie 
          key = { movie.id }
          id = { movie.id }
          year = { movie.year }
          title = { movie.title }
          summary = { movie.summary }
          poster = { movie.medium_cover_image }
          // 추가 3. App.js에 추가 
          genres = { movie.genres }
        />
        ))}
      </div>)
      }</div>
    );
  }
}

export default App;
