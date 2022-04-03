import React, { useContext } from "react";
import { CountContext } from "../../App";


const ThirdComponent = () => {

const [count, setCount] = useContext(CountContext)
  return (
    <div className='third-component'>
      <div className='counter-container'>
        <h1>Third Component</h1>
        <div>
          <button onClick={() => setCount(count + 1)}>+</button>
          <h2>Count:{count}</h2>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default ThirdComponent;
