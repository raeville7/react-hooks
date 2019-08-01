import React, { useEffect, useState } from 'react';
function LifecycleDemo() {
    useEffect(() => {
      // This gets called after every render, by default
      // (the first one, and every one after that)
      console.log('render!');
  
      // If you want to implement componentWillUnmount,
      // return a function from here, and React will call
      // it prior to unmounting.
      return () => console.log('unmounting...');
    })
  
    return "I'm a lifecycle demo";
  }
const UseEffect = () => {
  // Set up another piece of state to keep track of
  // whether the LifecycleDemo is shown or hidden
  const [mounted, setMounted] = useState(true);


  // This function will unmount and re-mount the
  // LifecycleDemo, so you can see its cleanup function
  // being called.
  const toggle = () => setMounted(!mounted);
    return (
        <div>
          <h3>UseEffect</h3>
          <button onClick={toggle}>Show/Hide LifecycleDemo</button>
          <div>{mounted && <LifecycleDemo/>}</div>
        </div>
    );
};
export default UseEffect;