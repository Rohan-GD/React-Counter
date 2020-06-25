import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet'
import Welcome from './components/welcome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Greet  name="Rohan" lastname="George">
            <p>I am an aspiring web developer</p>
          </Greet>
          <Welcome name="Rohan" lastname="George"/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
