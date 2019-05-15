import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Measure from './Measures';



class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Route path='/' exact component={Measure}/>
        </BrowserRouter>




      </div>
    );
  }
}

export default App;
