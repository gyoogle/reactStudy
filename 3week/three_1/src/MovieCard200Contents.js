import React, { Component } from 'react';
import './MovieCard200Contents.css';
import { red } from 'ansi-colors';

class MovieCard200Contents extends Component {
   render() {
       const cardStyle = {
            width:200,
            height:400,
            backgroundColor:red
       }
       return (
           <div className="stMovieCardContents2">
                <strong>No.{this.props.rank}</strong>
                <h3>{this.props.movieTitle}</h3>
                <hr/>
                <span>{this.props.mainActor}</span>
                <p> {this.props.movieDesc} </p>
           </div>
       );
   }
}

export default MovieCard200Contents;