import React from 'react'
import ReactDOM from 'react-dom'

//React 임포트한걸로 JSX를 실행   이미지보이게
const displayResult = 
<div>
 <h1>Movie List.. </h1>
 <MovieCard movieTitle="FirstMan" mainActor="Ryan Gosling" imgUrl = "http://img.movist.com/?img=/x00/05/06/26_p1.jpg" >
    On the heels of their six-time Academy Award®-winning smash, La La Land, Oscar®-winning director Damien Chazelle and star Ryan Gosling reteam for Universal Pictures’ First Man, the riveting story behind the first manned mission to the moon, focusing on Neil Armstrong and the decade leading to the historic Apollo 11 flight.
 </MovieCard>
</div>

//디스를레이컨텐츠를 virtualDOM에 렌더링
ReactDOM.render(displayResult, document.getElementById('root') )

//무비카드 컴포넌트 정의
function MovieCard(props) {
   const movieCardStyle = {
       border : "1px solid black",
             margin: 10 ,
       width: 300,
       height: 300,
       float: "left"
   }
   return <div>
   <div style= {movieCardStyle}><img src={props.imgUrl} alt="value" />
   </div>
   <div style = {movieCardStyle}>
       <h3>{props.movieTitle}</h3>
       <hr/>
       <span>{props.mainActor}</span>
       <p>{props.children}</p>
   </div>
   </div>
} 