import React, { useState, createContext } from "react"; // importing Hook and React
import "./App.css";
import Editbox from "./Editbox"; // Import Editbox.js
import Buttonnumbers from "./Buttonnumbers"; // Import buttonnumbers.js
// import Buttonnum from "./Buttonnum";
export const ButtonContext = createContext(); // to create context for passing the state
// To define the function App
function Calculator() {
  const [digit, setDigit] = useState(0); // initialize zero
  return (
    <div className="App-header">          
        <ButtonContext.Provider value={{ digit, setDigit }}>
          <Editbox /> {/*call Editbox.js file*/}
          <Buttonnumbers /> {/*call Buttonnumbers.js file*/}
        </ButtonContext.Provider>  
    </div>
  );
}
export default Calculator;
