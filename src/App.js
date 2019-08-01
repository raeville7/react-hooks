import React from 'react';
import './App.css';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseReducer from './UseReducer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="component"><UseState /></div>
      <div className="component"><UseEffect /></div>
      <div className="component"><UseRef /></div>
      <div className="component"><UseReducer /></div>
    </div>
  );
}

export default App;
