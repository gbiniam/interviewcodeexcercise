import React, { Component } from 'react';
import Rocket from './component/rockets'
import Launch from './component/launches'
import AboutSpaceX from './component/aboutSpaceX'
import logo from './logo.svg';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AboutSpaceX/>
        <Rocket/>
        <Launch/>
      </div>
    );
  }
}

export default App;
