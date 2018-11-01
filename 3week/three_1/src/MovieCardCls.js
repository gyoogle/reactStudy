import React, { Component } from 'react';

class MovieCardCls extends Component {
    render(){
        return (
            <div>
                <h1> {this.props.movieTitle} </h1>
                <hr/>
                <span>주연배우</span>
                <p>영화설명</p>
            </div>
        );
    }
}

export default MovieCardCls;
