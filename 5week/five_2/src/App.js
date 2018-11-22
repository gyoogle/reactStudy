import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import VideoSearch from './VideoSearch';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      selectedVideo : null
    };
    
    const API_KEY = "AIzaSyB6CGWeWKUIfvxB3h0tZ4PeWmDeFcrL3RE";

    YTSearch({ 
      key: API_KEY, 
      term: "react" 
    }, data => {
      console.log(data);
      this.setState({ data: data, selectedVideo : data[0]
    });
  });

  }

  render() {
    return (
      <div className="App">
        <h2> Youtube API </h2>

        <VideoSearch/>
        <VideoList videos = {this.state.data}/>
        <VideoDetail/>

      </div>
    );
  }
}

export default App;
