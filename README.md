# reactStudy
react 오프라인 스터디에서 배운 내용 복습 및 정리



스터디 시작 : 18.10.18 (19시 신도림 스터디룸)



### 1주차(18.10.18)

---

#### 리액트란?

> 자바스크립트 라이브러리이며, 페이스북에서 만들고 사용중인 오프소스 프로젝트
>
> 앵귤러와 달리, 프레임워크는 아님
>
> 프론트엔드 UI를 만드는데 사용 (MVC 중 View)
>
> 컴포넌트 형식으로 구현하여 재사용이 가능함



#### virtual DOM

> 실제 DOM에 적용되기 전에, 가상의 DOM에 먼저 적용시키고 최종 단계에 달라진 부분만 실제 DOM으로 전달해준다.
>
>
> 기존의 DOM은 변화가 생기면, 렌더 트리를 재생성하고 (모든 요소의 스타일이 다시 계산) 레이아웃을 만들고 페인팅을 하는 과정을 다시 처음부터 반복하게 됨
>
> 특히 SPA에서는 DOM 조작이 많이 발생하므로, 브라우저의 연산량이 늘어나고 전체적인 프로세스를 비효율적으로 만들 수도 있기에 virtual DOM이 탄생한 것



##### 디지털 시계를 통해 확인해보기

1. **기존의 DOM을 활용한 디지털 시계**

   ```
   <html>
   
   <head></head>
   
   <div id="root"></div>
   
   
   <script type="text/javascript">
   
   setInterval( () => {
   
       const date = new Date()
       const hour = date.getHours()
       const min = date.getMinutes()
       const sec = date.getSeconds()
   
       root.innerHTML = `<h1> ${hour} : ${min} : ${sec} </h1>`
   
   }, 1000)
   
   </script>
   
   </html>
   
   ```

   html을 실행한 후, 검사 페이지에 들어가 element를 확인해보면, 변경되는 1초마다 body내에서 div와 h1 태그가 깜빡이면서 리프레시 되는 걸 확인할 수 있음

2. ##### virtual DOM을 활용한 디지털 시계

   ```
   <html>
   
   <head>
       <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
       <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
       <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>
   
   </head>
   <div id="root"></div>
   
   
   <script type="text/babel">
   
   
   setInterval( () => {
       const date = new Date();
       const hour = date.getHours()
       const min = date.getMinutes()
       const sec = date.getSeconds()
       
       const ele = <h1>{hour} : {min} : {sec} </h1>
       ReactDOM.render(ele, root)
   
   }, 1000)
   </script>
   
   </html>
   
   ```

   스크립트를 통해 react, reactDOM, babel을 가져와서 사용하고 있다. 

   ReactDOM.render(ele, root)을 통해 virtualDOM을 활용하여 랜더링 하는 모습

   이 html 파일을 실행한 후 똑같이 검사로 들어가 element를 확인해보면, 기존의 DOM방식과는 다르게 실제로 변경되는 초 단위만 깜빡거리며 리프레시 되는 모습을 확인할 수 있다.



이 예시로는 큰 차이점을 못 느끼겠지만, 프로젝트가 커지고 상당히 많은 연산을 사용해야 하는 프로그램에서는 이처럼 모든 부분을 다시 시작하는 것과 변경된 부분만 실행해주는 것은 큰 차이가 있을 것이다. 리액트는 이걸 캐치해서 가상 DOM을 만들어낸 것





#### react 커맨드 사용하기

React와 ReactDOM 커맨드를 사용해보면서 어떤 동작을 하는지 확인하기



##### ReactDOM.render(displayResult, root)

> 첫번째 인자 : 나타낼 결과 html
>
> 두번째 인자 : 나타낼 위치 id를 입력

##### React.createElememt (태그, 속성, 컨텐츠)

> 첫번째 인자 : html 태그 (h1, a 등)
>
> 두번째 인자 : 속성 (a태그가 오면 href 같은 것)
>
> 세번째 인자 : 나타낼 컨텐츠 (hello react!)

```
<html>

<head>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    
</head>

<div id="root">
    
</div>


<script type="text/javascript">

const displayResult = React.createElement(
    "h1",
    null,
    "Hello React !!"
)

ReactDOM.render(displayResult, root);
</script>

</html>
```

이처럼 createElement를 통해 나타내고 싶은 인자를 모두 작성하고, displayResult 변수에 저장해 ReactDOM의 첫번째 인자로 넣어준다. root로 뿌리면 <div>에 id가 root로 설정된 지점에 제대로 출력되는 걸 확인할 수 있음



#### JSX 활용

JSX는 리액트에서 자바스크립트와 html을 섞어서 쓰는 걸 말함

html기능을 그대로 가져와 작성할 수 있어서 훨씬 편한 장점이 있다.

```
const displayResult = React.createElement(
    "h1",
    null,
    "Hello React !!"
)
```

기존의 이런 형태를

```
const displayResult = <h1>Hello react !!</h1>
```

이렇게 간단히 만들 수 있는 것이 바로 JSX!

html 태그가 들어가도, 새로 추가된 바벨이라는 기능이 중간에 트랜스파일링을 해주기 때문에 가능한 것이다.



```
<html>

<head>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>

</head>
<div id="root"></div>


<script type="text/babel">

const displayResult = <h1>Hello react !!</h1>

ReactDOM.render(displayResult, root)

</script>

</html>
```

스크립트에 바벨 라이브러리를 추가한 모습. 스크립트 타입도 자바스크립트에서 바벨로 변경되었다

바벨을 이용하면 중첩되는 복잡한 엘리먼트를 생성할 때 훨씬 유용할 것이다



```
const receiveName = "홍길동";
const linkUrl = "http://www.naver.com"
const firstStyle = {
    textAlign: "center"
}

const secondStyle = {
    color: "red"
}

const displayResult = <div style = {firstStyle}><a href={linkUrl} style={secondStyle}> Hello react {receiveName} </a></div>
```

이렇게 const로 받은 것은 { }를 사용



##### 사용자 function 활용

```
function F01 (props) {
    return <h2 style={{color: props.color}}> Hello react function component {props.userName}</h2>
}
```

내가 만든 F01이라는 함수다. 이 함수를 태그로 활용해서 적용시킬 수 있음

```
const displayResult03 = <F01 userName="데미안" color="blue"></F01>
ReactDOM.render(displayResult03, root)
```

태그 안에 존재하는 속성들을 props로 받아 지정된다.



##### Class 활용

```
class HelloWorld extends React.Component {
 render() {
   return (
   <div>
     <h1> hello React with Class !! </h1>
     <a style={{color: this.props.color}} > 리액트사이트연결 </a>
   </div>
   )
 }
}
```

컴포넌트 기능을 상속받아 클래스를 생성하는 모습이다. 

태그에 클래스이름을 넣어 생성이 가능해진다.

```
const displayResult04 = <HelloWorld color="green" linkUrl = "www.naver.com" />

ReactDOM.render(displayResult04, root)
```





### 2주차(18.10.25)

---

1. CRA 개발환경

   > 리액트를 로컬에서 개발서버처럼 활용해서 세팅하는 방법
   >
   > CRA : create-react-app
   >
   > 이를 사용하면 webpack 같은 환경구설 툴이 필요없음!
   >
   > 개발에만 집중할 수 있도록 환경 구성 방법을 숨기고 미리 구성해놓음
   >
   > `npx create-react-app '프로젝트 이름'` 
   >
   > `cd '프로젝트 이름'`
   >
   > 서버 중지 : Ctrl+C
   >
   > npx : npm 패키지 사용에 도움이 되는 도구

2. JSX React 연습

   > Javascirpt Syntax extension
   >
   > JSX는 리액트에서 element를 만들어내는 것
   >
   > 중괄호를 이용해 자바스크립트 표현을 JSX에 포함시킬 수 있다
   >
   > JSX 태그는 반드시 닫아줘야 함
   >
   > JSX 자식을 포함할 수 있음
   >
   > ```
   > //compo_test.js
   > 
   > export const user = {
   >     firstName: '클레이튼',
   >     lastName: '커쇼'
   > }
   > 
   > export function printFullName(user){
   >     return user.firstName + user.lastName
   > }
   > ```
   >
   > ```
   > //index.js
   > import React from 'react'
   > import ReactDOM from 'react-dom'
   > import {user, printFullName} from './compo_test'
   > 
   > const printFull = <h1> {printFullName(user)} </h1>
   > ReactDOM.render(printFull, document.getElementById('fullname'))
   > ```

3. Webpack

   > 다양한 컴포넌트를 모듈화 시켜 여기저기 export, import 하기 때문에, 서로 간의 의존성을 관리하는 것이 매우 중요!
   >
   > webpack에게 알려줘야 할 정보
   >
   > - 어플리케이션의 시작 포인트. 혹은 root 역할 하는 자바스크립트 파일
   > - 어떤 방법으로 코드를 변경할 것인지
   > - 어떤 위치로 변경된 코드를 위치시킬 것인지

4. ES6 Array

   > 배열 선언 방법
   >
   > `const arrPrac01 = [1,2,3,4]`
   >
   > 배열 길이는 length를 붙여서 확인 가능
   >
   > value 추가는 concat() 사용
   >
   >
   >
   > 배열 삽입 : push(항목), 배열 삭제 : pop()
   >
   > 배열 조작 후 새로운 배열에 나타낼 경우 : map 사용
   >
   > ```
   > const arrPrac02 = arrPrac01.map(function(x) {x+1})
   > ```
   >
   > 배열 중 특정조건에 맞는 것만 새로운 배열에 나타낼 경우 : filter 사용
   >
   > ```
   > const arrPrac02 = arrPrac01.filter(function(x) {x%2 ===0})
   > ```

5. ES6 Object

   > 데이터와 그 데이터에서 관련된 동작을 모두 포함하고 있는 개념
   >
   > Object 예시
   >
   > ```
   > const objPrac01 = {
   >     key: "value",
   >     number: 1
   > }
   > ```
   >
   > ```
   > var object = { ... };
   > 
   > for (var key in object) {
   >     console.log(key + '=>' + object[key])
   > }
   > ```



   - JSX

     > Javascript Syntax eXtension
     >
     > JSX 내에서 리액트 컴포넌트는 점표시로 참조 될 수 있음
     >
     > ```
     > const MyCompo = {
     >     key1 : function getKeyValue1(props){
     >         return <div> Imagine a {props.color} here </div>
     >     }
     > }
     > 
     > //렌더링 추가
     > <MyCompo.key1 color="blue"/>
     > ```
     >
     >
     >
     > ##### 주의사항
     >
     > 1. 사용자 정의 컴포넌트는 대문자로!
     > 2. 소문자인 경우 경고 혹은 문자처럼 출력됨
     >
     >
     >
     > JSX의 장점
     >
     > 1. 보기 쉽고 익숙
     > 2. 오류검사 편리
     > 3. html 태그와 비슷하여 활용도가 높음

6. VSC 디버그

   > VSCode에서 디버그 활용
   >
   > 익스텐션 탭에서 Debugger for Chrome 설치하고 리로드
   >
   > index.js에서 브레이크 포인트 찍은 후
   >
   > 크롬디버거 세팅 디버그 뷰에서 open launch.json 클릭 후 포트를 현재 기동포트인 3000으로 변경 후 저장
   >
   > yarn start 후 디버그 시작 F5, 넥스트 F10, 디버그 종료 Shift+F5




### 3주차(18.11.01)

---

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

