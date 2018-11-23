### 2주차(18.10.25)

------

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

   <br/>

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

   <br/>

3. Webpack

   > 다양한 컴포넌트를 모듈화 시켜 여기저기 export, import 하기 때문에, 서로 간의 의존성을 관리하는 것이 매우 중요!
   >
   > webpack에게 알려줘야 할 정보
   >
   > - 어플리케이션의 시작 포인트. 혹은 root 역할 하는 자바스크립트 파일
   > - 어떤 방법으로 코드를 변경할 것인지
   > - 어떤 위치로 변경된 코드를 위치시킬 것인지

   <br/>

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

   <br/>

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

   <br/>

6. JSX

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

   <br/>

7. VSC 디버그

   > VSCode에서 디버그 활용
   >
   > 익스텐션 탭에서 Debugger for Chrome 설치하고 리로드
   >
   > index.js에서 브레이크 포인트 찍은 후
   >
   > 크롬디버거 세팅 디버그 뷰에서 open launch.json 클릭 후 포트를 현재 기동포트인 3000으로 변경 후 저장
   >
   > yarn start 후 디버그 시작 F5, 넥스트 F10, 디버그 종료 Shift+F5