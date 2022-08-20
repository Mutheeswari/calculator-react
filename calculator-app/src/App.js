import React, { useState, createContext } from "react"; 
import "./App.css"; 
import Editbox from "./Editbox"; 
import Buttonnumbers from "./Buttonnumbers"; 
export const ButtonContext = createContext(); // using ButtonContext
function App() {
  const [digit, setDigit] = useState(0); // initialize zero
  return (
    <div className="App-header">          
        <ButtonContext.Provider value={{ digit, setDigit }}>
          <Editbox /> 
          <Buttonnumbers /> 
        </ButtonContext.Provider>      
    </div>
  );
}
export default App;
