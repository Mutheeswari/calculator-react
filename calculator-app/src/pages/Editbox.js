import "./App.css"; // import App.css to get the class
import { useContext } from "react"; // import useContext
import { ButtonContext } from "./Calculator"; // import ButtonContext which was created in the App.js

function Editbox() {
  const buttoncont = useContext(ButtonContext); // Define useContext with imported context (ButtonContext)
  const { digit } = buttoncont; // destructuring the (buttoncont) context variable which are needed
  return (
    <div>    
        {/*Display Edit box with value which was returned from App.js*/}
        <input
          type="text"
          id="edittxt"
          name="edittxt"
          class="set-width"
          value={digit}
        />    
    </div>
  );
}
export default Editbox;

