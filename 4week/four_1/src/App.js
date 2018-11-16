import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lec01_firstHandler from './lec01_first';
import Lec02_second from './lec02_second';
import Lec03_method from './lec03_method';
import Lec04_multiInput from './lec04_multiInput';
import Lec05_keyEvent from './lec05_keyEvent';
import Lec06_lifecycle from './lec06_lifecycle';
import Stopwatch from './stopwatch';
import InchToCm from './lec07_inchToCm';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Lec01_firstHandler/> */}
       {/*<Lec02_second/>*/}
       {/*<Lec03_method/>*/}
       {/*<Lec04_multiInput/>*/}
       {/*<Lec05_keyEvent/>*/}
       {/*<Lec06_lifecycle/>*/}
       {/*<Stopwatch/>*/}
       <InchToCm/>
  
      </div>
    );
  }
}

export default App;
