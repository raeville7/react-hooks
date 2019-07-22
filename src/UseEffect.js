import React, { useEffect, useState } from 'react';
function LifecycleDemo() {
    // It takes a function
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
    const [random, setRandom] = useState(Math.random());

  // Set up another piece of state to keep track of
  // whether the LifecycleDemo is shown or hidden
  const [mounted, setMounted] = useState(true);

  // This function will change the random number,
  // and trigger a re-render (in the console,
  // you'll see a "render!" from LifecycleDemo)
  const reRender = () => setRandom(Math.random());

  // This function will unmount and re-mount the
  // LifecycleDemo, so you can see its cleanup function
  // being called.
  const toggle = () => setMounted(!mounted);
    return (
        <div>
          <button onClick={reRender}>Re-render</button>
          <button onClick={toggle}>Show/Hide LifecycleDemo</button>
          {mounted && <LifecycleDemo/>}
        </div>
    );
};
export default UseEffect;