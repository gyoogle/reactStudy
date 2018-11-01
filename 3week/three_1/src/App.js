import React, { Component } from 'react';
import './App.css';
import MovieCardCls from './MovieCardCls'
import MovieCard from './MovieCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieCard/>
      </div>
    );
  }
}

export default App;
