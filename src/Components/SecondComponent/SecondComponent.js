import React, { useContext } from "react";
import { CountContext } from "../../App";

const SecondComponent = () => {
const [count, setCount] = useContext(CountContext)

  return (
    <div className='second-component'>
     <div className='counter-container'>
        <h1>Second Component</h1>
        <div>
          <button onClick={() => setCount(count + 1)}>+</button>
          <h2>Count:{count}</h2>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
