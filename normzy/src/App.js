import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Home from './components/home'
import { getMovies } from "./services/api-helper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      apiLoaded: false,
      title: ""
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await getMovies(this.state.title);
    const movies = resp.data.Search
    console.log(movies);
    
    this.setState({
      movies,
      apiLoaded: true
    });
  };
  

  handleChange = (e) => {
    const { name, value } = e.target;    
    this.setState({
      [name]: value,
    })
  }


  render() {
    return (
      <div className="App">
        <header>Normzy Movie Hub</header>
        <form onSubmit={(e) => this.handleSubmit(e, this.state)} className="form">
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          placeholder="Movie Title"/>
          <button>Submit</button>
        </form>

        {this.state.apiLoaded &&
          <div className="movies">
            {this.state.movies.map((movie, index) => (
              <div className="movieCard">
                <div>
                  <h3>{movie.Title}</h3>
                  <img src={movie.Poster} alt="loading" />
                  <h5>Release Date: {movie.Year}</h5>
                </div>
              </div>
            ))}
          </div>}
      </div>
    );
  }
}

export default App;
