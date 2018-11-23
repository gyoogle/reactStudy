### 3주차(18.11.01)

------

1. 리액트 클래스

   > 클래스로 만들면 state, lifecycle, ref 참조 등 추가적인 사용이 가능함
   >
   > class 개념은 ES6에서 새로 도입된 요소로, 모든 컴포넌트가 React.Component를 상속
   >
   > **클래스로 작성 예시**
   >
   > ```
   > //MovieCardCls.js
   > 
   > import React, { Component } from 'react';
   > 
   > class MovieCardCls extends Component {
   >     render(){
   >         return (
   >             <div>
   >                 <h1> {this.props.movieTitle} </h1>
   >                 <hr/>
   >                 <span>주연배우</span>
   >                 <p>영화설명</p>
   >             </div>
   >         );
   >     }
   > }
   > 
   > export default MovieCardCls;
   > ```
   >
   > 이처럼 컴포넌트를 상속한 클래스로 생성 후, export로 내보내서 App.js에서 활용할 수 있음
   >
   >
   >
   > ```
   > //App.js
   > 
   > import React, { Component } from 'react';
   > import './App.css';
   > import MovieCardCls from './MovieCardCls';
   > 
   > class App extends Component {
   >   render() {
   >     return (
   >       <div className="App">
   >         <MovieCardCls/>
   >       </div>
   >     );
   >   }
   > }
   > 
   > export default App;
   > ```
   >
   > 클래스를 3개로 나누어 관리하는 과정도 연습하기
   >
   > - MovieCard100Header.js
   > - MovieCard200Contents.js
   > - MovieCard300Tail.js
   >
   > 3개의 파일을 만들어 내용을 입력 후, MovieCard.js에서 아래와 같이 관리한다.
   >
   > ```
   > class MovieCard extends Component {
   >     render() {
   >         return (
   >             <div>
   >                 <MovieCard100Header/>
   >                 <MovieCard200Contents/>
   >                 <MovieCard300Tail/>
   >             </div>
   >         );
   >     }
   > }
   > 
   > export default MovieCard;
   > ```
   >
   > 나중에 큰 프로젝트를 진행 시, 이처럼 컴포넌트를 나누어 관리하면 유지보수에 용이함
   >
   >
   >
   > - 클래스 작성시 'rcc' 코드스니펫을 이용하면 자동으로 틀이 생성되므로 이용하자

   </br>

2. Object로 클래스 표현

   > 무비카드 안에 여러가지 영화를 넣기 위해 배열로 된 객체를 만들어 클래스 안에서 활용할 수 있다. 
   >
   >
   >
   > ```
   > import React, { Component } from 'react';
   > import MovieCard100Header from './MovieCard100Header';
   > import MovieCard300Tail from './MovieCard300Tail';
   > import MovieCard200Contents from './MovieCard200Contents';
   > 
   > const movieArr = [
   >     {
   >         Rank: 1,
   >         movieTitle: '퍼스트맨',
   >         mainActor: '라이언고슬링',
   >         movieDesc: '달에가는 역경을 그린 영화입니다'
   >     },
   >     {
   >         Rank: 2,
   >         movieTitle: '해리포터',
   >         mainActor: '브래드피트',
   >         movieDesc: '마법사 이야기 영화입니다'
   >     },
   >     {
   >         Rank: 3,
   >         movieTitle: '어벤져스',
   >         mainActor: '스티븐 로저스',
   >         movieDesc: '슈퍼히어로들이 외계인 침공을 막는 영화입니다'
   >     }
   > ]
   > 
   > class MovieCard extends Component {
   >     render() {
   >         return (
   >             <div>
   >                 <MovieCard100Header/>
   >                 <div>
   >                     {movieArr.map(movie => {
   >                         return <MovieCard200Contents rank = {movie.Rank} movieTitle={movie.movieTitle} mainActor = {movie.mainActor} movieDesc = {movie.movieDesc}/>
   >                     })}
   >                 </div>
   >                 <MovieCard300Tail/>
   >             </div>
   >         );
   >     }
   > }
   > 
   > export default MovieCard;
   > 
   > ```
   >
   > 반복되는 내용은 배열에 map()함수를 이용해 나타내면 된다.

   </br>

3. 화살표 함수

   > 문법을 사용하는 축약형 함수
   >
   > 또한 화살표 함수를 사용하면서 상위 스코프를 가리키는 this를 활용할 수 있음
   >
   > 사용법
   >
   > ```
   > let a = function () { 
   >     return new Date()
   > }
   > 
   > a = () => {
   >     return new Date()
   > }
   > 
   > a = () => new Date()
   > ```
   >
   > 이처럼 기존의 function을 생략하고 () 뒤에 =>를 붙여서 사용하면 된다.
   >
   > return문 만 올 경우 return도 생략 가능

   </br>

4. 리액트 State

   > 변경되는 데이터
   >
   > 컴포넌트 내부에서 읽고 수정할 수 있는 값
   >
   > 기본값을 설정해둬야 함
   >
   > 기본값에서 업데이트를 진행할 시, this.setState() 사용
   >
   >
   >
   > 생성자 constructor()를 만들어 state는 객체 형태로 만들어 준다.
   >
   > ```
   > constructor(props){
   >   super(props)
   >   this.state = {
   >     username : '기본값'
   >   }
   >   
   >   render() {
   >       return (
   >           <div>
   >               <h1>My Movie Chart</h1>
   >               <h3>{this.state.username} 회원님 환영합니다!</h3>
   >           </div>
   >       );
   >   }
   > }
   > ```
   >
   > 나중에 로그인 기능을 만든 이후에 기본값에서 내 정보로 변경될 수 있도록? 만들 수 있음

   </br>

5. 리액트 라우팅

   > 다른 주소에 따라 다른 뷰를 보여주는 것
   >
   > react-router는 리액트에서 만든 것이 아니라 써드파티 라이브러리임
   >
   > 설치
   > `yarn add react-router-dom`
   >
   > 사용
   > `import {BrowserRouter} from 'react-router-dom'`
   >
   > 예시
   >
   > ```
   > import React from 'react';
   > import ReactDOM from 'react-dom';
   > import './index.css';
   > import App from './App';
   > import { BrowserRouter } from 'react-router-dom';
   > 
   > const displayResult = <BrowserRouter><App/></BrowserRouter>
   > 
   > ReactDOM.render(displayResult, document.getElementById('root'));
   > ```
   >
   > 이처럼 기존의 <App/>에 BrouserRouter로 감싸줘야 라우터 사용이 가능하다.
   >
   >
   >
   > **Home.js와 About.js 만들어서 라우팅 시켜보기**
   >
   > ```
   > //Home.js
   > import React, { Component } from 'react';
   > 
   > class Home extends Component {
   >     render() {
   >         return (
   >             <div>
   >                 <h2>Home 컴포넌트입니다.</h2>
   >             </div>
   >         );
   >     }
   > }
   > 
   > export default Home;
   > ```
   >
   > ```
   > //About.js
   > import React, { Component } from 'react';
   > 
   > class About extends Component {
   >     render() {
   >         return (
   >             <div>
   >                 <p>만든이 : 김규석</p>
   >                 현재시간 : {Date()}
   >             </div>
   >         );
   >     }
   > }
   > 
   > export default About;
   > ```
   >
   > 이제 app.js에서 라우팅 시킨다.
   >
   > ```
   > import React, { Component } from 'react';
   > import './App.css';
   > import { Route } from 'react-router-dom';
   > import Home from './Home';
   > import About from './About';
   > 
   > class App extends Component {
   >   render() {
   >     return (
   >       <div>
   >         <div className="App">
   >           <Route path="/" exact={false} component={Home}/>
   >           <Route path="/about" component={About}/>
   >         </div>
   >       </div>
   >     );
   >   }
   > }
   > export default App;
   > ```
   >
   > 이제 리액트 실행 후, 경로에 about을 추가해주면 home.js 뷰에다가 about.js 뷰가 추가되어 나타나는 것을 볼 수 있음
   >
   >
   >
   > 근데 왜 about에 home꺼도 추가되지? 무조건 "/" 경로는 home.js만 보이도록 설정하려면? : **exact={true}를 써주면 됨**
   >
   > Link는 다른 주소로 이동시키는 컴포넌트
   > a태그 대신 Link를 사용하면 Virtual DOM을 통해 해당 링크 부분만 바뀐다.
   >
   > ```
   > <div>
   >           <ui>
   >             <li><Link to="/">메인</Link></li>
   >             <li><Link to="/about">소개</Link></li>
   >             <li><a href="/about">소개(a사용)</a></li>
   >           </ui>
   >         </div>
   > ```
   >
   > 소개로 넘어가는 걸 Link와 a 태그로 만들어보고 검사 페이지에서 변하는 과정 확인하기

