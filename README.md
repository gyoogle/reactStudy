# reactStudy
react 오프라인 스터디에서 배운 내용 복습 및 정리



스터디 시작 : 18.10.18 (매주 수요일, 19시 신도림 스터디룸)



### 1주차 

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



