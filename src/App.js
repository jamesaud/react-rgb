import React, { Component } from 'react';
import logo from './logo.svg';
import ColorDisplay from "./ColorDisplay";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the <strong><span style={{color: "red"}}>R</span>
                                     <span style={{color: "green"}}>G</span>
                                     <span style={{color: "blue"}}>B</span>
                                     <span style={{color: "silver"}}>A</span> 
                                     &nbsp;Color Picker</strong></h2>
        </div>
        <div>
          <ColorDisplay />
        </div>
      </div>
    );
  }
}

export default App;
