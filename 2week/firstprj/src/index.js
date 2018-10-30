import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import {performPlus, displaySymbol} from './compo_test'
import perform from './compo_test'
import {user, printFullName} from './compo_test'

//React 임포트한걸로 JSX를 실행
const displayResult = <h1>Hello React 개발환경 !!!</h1>
const displayImage = <img src={logo} alt='some value'></img>
const displayText = <h3>우리는 index.js를 수정하고 있어요.</h3>
const displayLink = <a href="www.naver.com">네이버 이동</a>
const displayPlus = <h2>1 plus 10 ===> {performPlus(1, 10)}</h2>
const displaySym = <h3>1 {displaySymbol} 10 ===> {performPlus(1, 10)}</h3>
const displayMinus = <h3> 1 minus 1 === {perform(1,1)} </h3>
const printFull = <h1> {printFullName(user)} </h1>

//디스플레이컨텐츠를 virtualDOM에 렌더링
ReactDOM.render(displayImage, document.getElementById('image'))
ReactDOM.render(displayResult, document.getElementById('root'))
ReactDOM.render(displayText, document.getElementById('text'))
ReactDOM.render(displayLink, document.getElementById('link'))
ReactDOM.render(displayPlus, document.getElementById('plus'))
ReactDOM.render(displaySym, document.getElementById('symbol'))
ReactDOM.render(displayMinus, document.getElementById('minus'))
ReactDOM.render(printFull, document.getElementById('fullname'))

