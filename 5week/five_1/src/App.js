import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      externalData : []
    }
    
    // 동기
    for(var i = 0; i < 10; i++){
      console.log(i);
    }
    console.log('done!');
  }

  // setTimeout을 활용한 비동기
  componentWillMount() {
    console.log('Hello');
    setTimeout( () => {
      console.log('bye');
    }, 3000);
    console.log('hello again');
  }

  componentDidMount() {
    // 비동기2
    /*
    for (var i = 0; i < 10; i++){
      setTimeout( () => {
        console.log(i);
      }, 10);
    }
    console.log('done!');
    */

    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));

    console.log("외부API data **> " + this.state.data.length );

    this.testExternalApi();
  }

  async testExternalApi() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    let data = await response.json();
    this.setState({ externalData : data })
  }

  render() {
    return (
      <div className="App">
        <h3>Study 5week</h3>
        <ul>
          {this.state.data.map(bitcoin => (
            <li key={bitcoin.id}>
              <span>{bitcoin.name}: {bitcoin.price_usd} (Rank : {bitcoin.rank})</span>
            </li>
          ))}
        </ul>

        <h3>test API</h3>
        <ul>
          {this.state.externalData.map(test => (
            <li key={test.id} className="text-left">
              {test.id} : {test.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
