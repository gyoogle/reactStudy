### 4주차(18.11.15)

---



1. 리액트 이벤트

   > **이벤트 : **유저가 웹 브라우저에서 DOM요소들과 상호 작용하는 것
   >
   > 이벤트 이름은 camelCase로 작성한다. ( ex. onclick이 아니라 onClick)
   >
   > DOM 요소에만 이벤트 설정이 가능함 (div, button, input)
   >
   > 사용자가 만든 컴포넌트는 props를 전달하게 됨
   >
   > <br/>
   >
   > - 화살표 함수로 구현한 이벤트
   >
   > ```
   > <input type="text" onChange = {e => {
   >   alert("리액트 이벤트 연습. 화살표 함수로" + e.target.value);
   >   }}
   > />
   > ```
   >
   > <br/>
   >
   > - 텍스트 박스를 통해 스테이트 값 디스플레이
   >   - [코드](https://github.com/kim6394/reactStudy/blob/master/4week/four_1/src/lec03_method.js)
   >
   > - input 값이 여러 개인 key를 동적으로 할당
   >   - [코드](https://github.com/kim6394/reactStudy/blob/master/4week/four_1/src/lec04_multiInput.js)
   > - 입력 박스에서 keyEvent를 받기
   >   - [코드](https://github.com/kim6394/reactStudy/blob/master/4week/four_1/src/lec05_keyEvent.js)

   <br/>

2. 라이프 사이클

   > 리액트 UI 컴포넌트는 3단계로 이루어짐
   >
   > 1. 생성 : 마운팅 이벤트
   >
   >    > constructor()
   >    >
   >    > componentWillMount()
   >    >
   >    > render()
   >    >
   >    > componentDidMount()
   >
   > 2. 갱신 : 속성, 상태 변경
   >
   >    > componentWillReceiveProps()
   >    >
   >    > shouldComponentUpdate()
   >    >
   >    > componentWillUpdate()
   >    >
   >    > render()
   >    >
   >    > componentDidUpdate()
   >
   > 3. 소멸 : 언마운팅 이벤트
   >
   >    > componentWillUnmount()
   >
   > <br/>
   >
   > **라이프사이클 API를 사용하는 경우**
   >
   > - 컴포넌트가 처음으로 렌더링할 때 어떤 작업이 필요한 경우
   >
   > - 컴포넌트를 업데이트 하기 전후로 어떤 작업이 필요한 경우
   >
   > - 불필요한 업데이트를 방지해야 하는 경우
   >
   >
   >
   > **접두어 Will** : 어떤 작업 **'전'**에
   >
   > **접두어 Did** : 어떤 작업 **'후'**에
   >
   > <br/>
   >
   > **마운트** : DOM이 생성되고 웹브라우저 상에 나타나는 것을 mount
   >
   > **constructor()** : 컴포넌트 초기화
   >
   > **getDerivedStateFromProps() :** props 값을 state에 동기화
   >
   > **render() :** UI에 보여주는 것
   >
   > **componentDidMount() :** 컴포넌트가 마운트 된 후에 호출되는 API
   >
   > **언마운트** : 컴포넌트를 DOM에서 제거
   >
   > <br/>
   >
   > props, state가 업데이트, 부모 컴포넌트 리랜더링, forceUpdate로 강제 랜더링될 때 호출
   >
   >
   >
   > - [라이프사이클 코드](https://github.com/kim6394/reactStudy/blob/master/4week/four_1/src/lec06_lifecycle.js)
   >
   >   > 콘솔에 찍어보고 어떻게 작동되는지 확인하기

   <br/>

3. 컴포넌트 간 통신 방법

   > **컴포넌트의 라이프사이클을 활용한 예제**
   >
   > - [스톱워치](https://github.com/kim6394/reactStudy/blob/master/4week/four_1/src/stopwatch.js)
   > - [inch-cm 변환](https://github.com/kim6394/reactStudy/blob/master/4week/four_1/src/lec07_inchToCm.js)

   <br/>

4. ESLint

   > 코드 헬핑 기능
   >
   > 잘못된 코드가 있으면 알려주는 기능이다.
   >
   > extensions에서 eslint 검색 후 설치 및 리로드하기

   <br />

5. Bootstrap

   > 개발 내용이 지저분하면 보기 힘드니 CSS를 만들어서 적용시켜줌
   >
   > [관련 사이트](https://www.getbootstrap.com)
   >
   >
   > 해당 스크립트를 public/index.html의 head쪽에 넣는다.
   >
   > 값을 적용할 때는 className을 맞게 작성하면 됨