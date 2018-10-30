import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>Hello Movie!</h1>
                <MovieTitle/>
                <MoviePoster/>
                <MovieActors/>
                <MovieStory/>
            </div>
        )
    }
}

class MovieTitle extends Component {
    render(){
        return (
            <div>
                <h3>Title : Avengers</h3>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render(){
        return (
            <img src="https://upload.wikimedia.org/wikipedia/ko/9/92/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4_%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8B%B0_%EC%9B%8C.jpg" alt="value"/>
        )
    }
}

class MovieActors extends Component {
    render(){
        return (
            <div>
                <h3>Actors</h3>
                <h5>스티븐 로저스, 토니 스타크</h5>
            </div>
        )
    }
}

class MovieStory extends Component {
    render(){
        return (
            <div>
                <h3>Story</h3>
                <h5>어벤져스들이 지구를 지키는 이야기</h5>
            </div>
        )
    }
}

export default Movie;