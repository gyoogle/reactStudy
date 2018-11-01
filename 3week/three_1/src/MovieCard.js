import React, { Component } from 'react';
import MovieCard100Header from './MovieCard100Header';
import MovieCard200Content from './MovieCard200Content';
import MovieCard300Tail from './MovieCard300Tail';
import MovieCard200Contents from './MovieCard200Contents';

const movieArr = [
    {
        Rank: 1,
        movieTitle: '퍼스트맨',
        mainActor: '라이언고슬링',
        movieDesc: '달에가는 역경을 그린 영화입니다'
    },
    {
        Rank: 2,
        movieTitle: '해리포터',
        mainActor: '브래드피트',
        movieDesc: '마법사 이야기 영화입니다'
    },
    {
        Rank: 3,
        movieTitle: '어벤져스',
        mainActor: '스티븐 로저스',
        movieDesc: '슈퍼히어로들이 외계인 침공을 막는 영화입니다'
    }
]

class MovieCard extends Component {
    render() {
        return (
            <div>
                <MovieCard100Header/>
                <div>
                    {movieArr.map(movie => {
                        return <MovieCard200Contents rank = {movie.Rank} movieTitle={movie.movieTitle} mainActor = {movie.mainActor} movieDesc = {movie.movieDesc}/>
                    })}
                </div>
                <MovieCard300Tail/>
            </div>
        );
    }
}

export default MovieCard;
