import React from 'react';
import './App.css';
import Count from './Count';
import Toggle from './Toggle';
import Focus from './Focus';
import Counter from './Counter';
import { DateContext } from './DateContext';
import Traditional from './Traditional'

function App() {
  const data = "React Hooks:";
  const date = new Date().toISOString().slice(0, 10);
  return (
    <div className="App">
    {/* DateContext.Provider same as passing props */}
      <DateContext.Provider value={{data, date}}>
        <div className="component"><Count /></div>
        <div className="component"><Toggle /></div>
        <div className="component"><Focus /></div>
        <div className="component"><Counter /></div>
      </DateContext.Provider>

      <Traditional data={data} />
    </div>
  );
}

export default App;
