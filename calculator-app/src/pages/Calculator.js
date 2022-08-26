import React, { useState, createContext } from "react"; // importing Hook and React
import "./App.css"; // Importing App.css for accessing class
import Editbox from "./Editbox"; // Import Editbox.js
import Buttonnumbers from "./Buttonnumbers"; // Import buttonnumbers.js
// import Buttonnum from "./Buttonnum";
export const ButtonContext = createContext(); // to create context for passing the state
// To define the function App
function Calculator() {
  const [digit, setDigit] = useState(0); // Declare useState to initialize the digit in the EditBox
  return (
    // call "App" and  "App-header" class in the App.css
    <div className="App">
      <header className="App-header">
        {/* Pass the state to another component using context provider */}
        <ButtonContext.Provider value={{ digit, setDigit }}>
          <div className="border-app">

          <Editbox /> {/*call Editbox.js file*/}
          <Buttonnumbers /> {/*call Buttonnumbers.js file*/}
          </div>
        </ButtonContext.Provider>
      </header>
    </div>
  );
}
export default Calculator;
