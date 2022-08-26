import React, { useState, createContext } from "react"; 
import "./App.css"; 
import Editbox from "./Editbox"; 
import Buttonnumbers from "./Buttonnumbers"; 
export const ButtonContext = createContext(); 
function App() {
  const [digit, setDigit] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <ButtonContext.Provider value={{ digit, setDigit }}>
          <Editbox /> {/*call Editbox.js file*/}
          <Buttonnumbers /> {/*call Buttonnumbers.js file*/}
        </ButtonContext.Provider>
      </header>
    </div>
  );
}
export default App;
