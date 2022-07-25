import "./App.css"; // import App.css to get the class
import { useContext,useState } from "react"; // import useContext
import { ButtonContext } from "./App"; // import ButtonContext which was created in the App.js
import { operators,buttonLabels } from "./constants";
function Buttonnumbers() {
  const { digit, setDigit } = useContext(ButtonContext); // Define useContext with imported context (ButtonContext)
  const [arrayvalue, setArrayvalue] = useState([]); 
  const removeString = (digi) => {
    setDigit(digi.slice(0, -1));
  };
  // To append numbers in the EditBox
  const appendNumber = (number) => {
    // To find whether the EditBox value is "0" or not
    // "===" to check the codition along with datatype
    if (digit === 0) {
      setDigit(number); //to call setDigit to change the editbox value if the previous value is "0"
    } else {
      setDigit(''+digit + number); //to call setDigit if the previous value
    }
    setArrayvalue.push(digit)
  };
  const operatorProcess = (number) => {
    setDigit(number);
  }

  const enterNumber = (number) => {
      if (operators.includes(number)) {
        setArrayvalue.push(number)
        operatorProcess (number);
      }
      appendNumber (number);
  }

  // create "for loop" with map for the buttons with arrow function
  const listItems = buttonLabels.map((number, index) => (
    // Button with onClick
    <li
      className="button-numbers"
      key={number.toString()}
      onClick={() => enterNumber(number)}
    >
      {number}
    </li>
  ));
  return (
    // call "App", "App-header" and "ul-numbers" class in the App.css
    <div className="App">
      <header className="App-header">
        <ul className="ul-numbers">
          {/*to display "clear","Del" and "numbers" buttons here*/}
          <button
            type="button"
            className="button-cldel"
            onClick={() => setDigit(0)}
          >
            Clear
          </button>
          <button
            type="button"
            className="button-cldel"
            onClick={() => removeString(digit)}
          >
            Del
          </button>
        </ul>
        <ul className="ul-numbers">{listItems} </ul>
      </header>
    </div>
  );
}

export default Buttonnumbers;
