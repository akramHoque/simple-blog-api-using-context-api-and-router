import React, { useContext } from "react";
import { CountContext } from "../../App";

const FirstComponentChild = () => {

const [count, setCount] = useContext(CountContext)

  return (
    <div className='first-component-child'>
      <div className='counter-container'>
        <h1>First Component Child</h1>
        <div>
          <button title='Increase' onClick={() => setCount(count + 1)} >
            +
          </button>
          <h1>Count:{count} </h1>
          <button title='Decrease' onClick={() => setCount(count - 1)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstComponentChild;
