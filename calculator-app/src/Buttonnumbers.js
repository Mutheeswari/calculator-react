import "./App.css"; // import App.css to get the class
import { useContext, useState } from "react"; // import useContext
import { ButtonContext } from "./App"; // import ButtonContext which was created in the App.js
import { operators, buttonLabels, buttonName } from "./constants";
function Buttonnumbers() {
  const { digit, setDigit } = useContext(ButtonContext); // Define useContext with imported context (ButtonContext)
  const [arrayvalue, setArrayvalue] = useState({
    firstItem: undefined,
    operator: "",
    thirdItem: undefined,
  });
  const removeString = (digi) => {
    setDigit(digi.slice(0, -1));
  };
  // To append numbers in the EditBox
  const appendNumber = (num) => {
    // To find whether the EditBox value is "0" or not
    // "===" to check the codition along with datatype
    if (digit === 0) {
      setDigit(num); //to call setDigit to change the editbox value if the previous value is "0"
    } else {
      if (num !== "=") {
        setDigit("" + digit + num); //to call setDigit if the previous value
      }
    }
  };
  const getArithmeticValue = () => {
    arrayvalue.firstItem = digit;
    setArrayvalue(arrayvalue);
  };
  const getValue = (num) => {
    appendNumber(num);
    if (operators.includes(num)) {
      getArithmeticValue();
      arrayvalue.operator = num;
      setArrayvalue(arrayvalue);
    }
    if (num === "=") {
      arrayvalue.thirdItem = digit.split(arrayvalue.operator)[1];
      setArrayvalue(arrayvalue);
      if (arrayvalue.operator === "+") {
        setDigit(Number(arrayvalue.firstItem) + Number(arrayvalue.thirdItem));
      }
      else if (arrayvalue.operator === "-") {
        setDigit(Number(arrayvalue.firstItem) - Number(arrayvalue.thirdItem));
      };
    }
  };
  // create "for loop" with map for the buttons with arrow function
  const listItems = buttonLabels.map((number, index) => (
    // Button with onClick
    <li
      // className="button-numbers"
      className={number === 0 ? "button-zero" : "button-numbers"}
      key={number.toString()}
      onClick={() => getValue(number)}
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
            {buttonName.clear}
          </button>
          <button
            type="button"
            className="button-cldel"
            onClick={() => removeString(digit)}
          >
            {buttonName.delete}
          </button>
        {listItems} </ul>
      </header>
    </div>
  );
}

export default Buttonnumbers;
