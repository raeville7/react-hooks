import React from 'react';
import './App.css';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseReducer from './UseReducer';
import { DateContext } from './DateContext';

function App() {
  const data = "React Hooks:";
  const date = new Date().toISOString().slice(0, 10);
  return (
    <div className="App">
      <DateContext.Provider value={{data, date}}>
        <div className="component"><UseState /></div>
        <div className="component"><UseEffect /></div>
        <div className="component"><UseRef /></div>
        <div className="component"><UseReducer /></div>
      </DateContext.Provider>
    </div>
  );
}

export default App;
