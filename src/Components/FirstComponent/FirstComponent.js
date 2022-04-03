import React, { useContext} from "react";
import FirstComponentChild from "../FirstComponentChild/FirstComponentChild";
import { CountContext } from "../../App";

const FirstComponent = () => {

const [count, setCount] = useContext(CountContext) ;

  return (
    <div className='first-component'>
      <div className='counter-container'>
        <h1>First Component</h1>
        <div>
          <button onClick={() => setCount(count + 1)}>+</button>
          <h2>Count:{count}</h2>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
      <FirstComponentChild />
    </div>
  );
};

export default FirstComponent;
