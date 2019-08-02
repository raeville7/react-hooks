import React, { useState, useContext } from "react";
import {DateContext} from './DateContext';

const Count = () => {
  const [count, setCount] = useState(20);
  const {data, date} = useContext(DateContext)
  return (
    <div>
      <h3>{data} UseState</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>{date}</p>
    </div>
  );
};

export default Count;
