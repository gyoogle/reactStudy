import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Link from 'react-router-dom/Link';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ui>
            <li><Link to="/">메인</Link></li>
            <li><Link to="/about">소개</Link></li>
            <li><a href="/about">소개(a사용)</a></li>
          </ui>
        </div>
        <div className="App">
          <Route path="/" exact={false} component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </div>
    );
  }
}

export default App;
