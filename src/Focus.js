import React, {useRef} from 'react';

const Focus = () => {
  //creating the ref by passing initial value null
  const nameRef = useRef(null);
  const mobileRef = useRef(null);
  function handleFocus(){
      //current is pointing to input element when component is mounts to dom
     // nameRef.current.focus()
      mobileRef.current.focus()
  }
    return (
        <div>
            <h3>UseRef</h3>
            <div>
                <input ref={nameRef} placeholder="name" />
                <input ref={mobileRef} placeholder="mobile" />
                <button onClick={handleFocus}>Focus</button>
            </div>
        </div>
    );
};

export default Focus;