import './App.css';     // import App.css to get the class
import { useContext  } from "react";   // import useContext 
import { ButtonContext } from "./App";  // import ButtonContext which was created in the App.js

function Editbox() {
  const buttoncont = useContext(ButtonContext);   // Define useContext with imported context (ButtonContext)
  const { digit } = buttoncont;  // destructuring the (buttoncont) context variable which are needed
  return (
    // call "App" and  "App-header" class in the App.css
    <div className = "App">
      <header className = "App-header">
        {/*Display Edit box with value which was returned from App.js*/}
      <input type = "text" id = "edittxt" name = "edittxt" class = "set-width" value = {digit} />
      </header>
    </div>
  );
}
export default Editbox;
