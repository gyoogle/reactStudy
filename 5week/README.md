### 5주차(18.11.22)

---

1. 비동기 처리

   >특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고, 다음 코드를 먼저 실행하는 자바스크립트의 특성
   >
   >**왜 필요?**
   >
   >대부분 클라이언트의 코드이므로, 서버에 요청을 하는 경우가 많음.
   >이런 요청이 많은데 요청마다 끝날 때까지 기다리면, 다른 작업을 못하는 문제 발생
   >
   ><br/>
   >**간단한 동기/비동기 알아보기**
   >
   >- 동기
   >
   >  ```
   >  for(var i = 0; i < 10; i++){
   >    console.log(i);
   >  }
   >  console.log('done!');
   >  ```
   >
   >- 비동기(setTimeout 활용)
   >
   >  ```
   >  for (var i = 0; i < 10; i++){
   >    setTimeout( () => {
   >      console.log(i);
   >    }, 10);
   >  }
   >  console.log('done!');
   >  ```
   >
   >  0.01초 뒤에 setTimeout이 수행되므로, 먼저 done!이 출력된다.
   >  또한 모두 10으로 변한 상태에서 가져오기 때문에, 10이 10개 찍힘

   <br/>

2. Promise

   >비동기 처리의 일부분인 콜백으로 인해 코드의 복잡도가 높아지는 걸 해결하기 위함
   >
   >콜백에서 에러 처리가 잘 안되는 부분을 프로미스로 개선했음
   >
   >생성 및 실행 : new Promise(resolve, reject) { ... }
   >
   ><br/>
   >
   >**프로미스 연습**
   >
   >```
   >//생성자
   >constructor(props){
   >  super(props);
   >  this.state = {
   >    data : [],
   >    externalData : []
   >  }
   >  ...
   >}
   >
   >//프로미스
   >fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
   >  .then(res => res.json())
   >  .then(json => this.setState({ data: json }));
   >```
   >
   >```
   >// 랜더링 부분
   ><ul>
   >  {this.state.data.map(bitcoin => (
   >    <li key={bitcoin.id}>
   >      <span>{bitcoin.name}: {bitcoin.price_usd} (Rank : {bitcoin.rank})</span>
   >    </li>
   >  ))}
   ></ul>
   >```
   >
   >- [코드](https://github.com/kim6394/reactStudy/blob/master/5week/five_1/src/App.js)

   <br/>

3. Async / Await

   >프로미스 코드가 못 생겼다는 비판이 나오면서 탄생한 새로운 대안
   >
   >함수명 앞에 async를 붙이면, 이는 비동기 처리함수가 됨
   >
   >await은 async 함수 안에서 사용함
   >
   ><br/>
   >
   >```
   >async testExternalApi() {
   >    let response = await fetch('https://jsonplaceholder.typicode.com/posts/');
   >    let data = await response.json();
   >    this.setState({ externalData : data })
   >}
   >```
   >
   >이로써 비동기 코드일지라도 async/await이 적용되면, 항상 response, data 순으로 실행됨
   >
   >즉, **비동기 코드를 동기적으로 수행하게 해주는 것**이 async/await

   <br/>

4. Youtube API 적용

   >1. 구글 클라우드 플랫폼 가입 이후, 프로젝트 생성
   >
   >2. API 및 서비스 항목 → 사용자 인증 정보 → API 키 만들기 (만들고 복사)
   >
   >3. 구글 개발자 콘솔에서 youtube api 활성화
   >4. 프로젝트에서 `npm install youtube-api-search`로 api 설치 
   >
   >
   >
   >
   >```
   >import React, { Component } from 'react';
   >import YTSearch from 'youtube-api-search';
   >
   >class App extends Component {
   >  constructor(props){
   >    super(props);
   >    this.state = {
   >      data : []
   >    };
   >    
   >    const API_KEY = "본인의 API 키를 복사해서 넣기";
   >
   >    YTSearch({ 
   >      key: API_KEY, 
   >      term: "react" 
   >    }, data => {
   >      console.log(data);
   >      this.setState({ data: data });
   >  });
   >
   >  }
   >
   >  render() {
   >    return (
   >      <div className="App">
   >        <h2> Youtube API </h2>
   >
   >      </div>
   >    );
   >  }
   >}
   >
   >
   >export default App;
   >```
   >
   >콘솔을 확인하면 내가 입력한 term에 맞는 유투브 영상 정보가 배열로 5개 들어온 것을 확인할 수 있다.
   >
   ><br/>
   >
   >[유투브 api를 활용한 프로젝트 코드](https://github.com/kim6394/reactStudy/tree/master/5week/five_2)

   <br/>

5. Publishing 해보기

   >무료 정적파일 서비스인 surge.sh를 활용
   >
   >해당 리액트 프로젝트를 build `npm build run`
   >
   >프로젝트 내에 build라는 폴더가 생성된다. 이 안에 내가 만든 코드가 저장되어 있고 이를 활용해 외부 서비스로 올릴 수 있다.
   >
   >터미널에서 build 폴더로 이동하여 surge 설치하기
   >
   >`npm install surge`
   >
   >`surge`
   >
   >이메일 주소와 패스워드로 회원가입 진행 후, 만들고 싶은 도메인을 설정하면 생성 완료
   >
   >내가 만든 도메인으로 접속해보기
   >
   >[도메인 접속](http://react-kim6394.surge.sh/)

