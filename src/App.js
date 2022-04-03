import "./App.css";
import FirstComponent from "./Components/FirstComponent/FirstComponent";
import SecondComponent from "./Components/SecondComponent/SecondComponent";
import ThirdComponent from "./Components/ThirdComponent/ThirdComponent";
import { useState, createContext } from "react";

export const  CountContext = createContext() ;
function App() {

  const [count, setCount] = useState(0) ;

  return (
    
      <CountContext.Provider value = {[count, setCount]}>
        <div className='app'>
        <div className="counter-container">
          <h3>App</h3>
          <div>
            <button title = 'Increase' onClick={() => setCount(count + 1)} >+</button>
            <h1>Count:{count} </h1>
            <button title = 'Decrease' onClick={() => setCount(count -1)}>-</button>
          </div>
        </div>
       <FirstComponent></FirstComponent>
       <SecondComponent></SecondComponent>
       <ThirdComponent></ThirdComponent>
      </div>
      </CountContext.Provider>
      
   
  );
}

export default App;
