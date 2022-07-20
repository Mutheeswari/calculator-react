import './App.css';  // import App.css to get the class
import { useContext  } from "react";   // import useContext 
import { ButtonContext } from "./App";    // import ButtonContext which was created in the App.js

function Buttonnumbers() {
  const buttoncont = useContext(ButtonContext);   // Define useContext with imported context (ButtonContext)
  const {digit, setDigit}=buttoncont      // destructuring the (buttoncont) context variable which are needed (values need to be changed)
  const numbers = ['/','*','-','+',9,8,7,4,5,6,1,2,3,0,'%','.','='];    // to create array element

  // To append numbers in the EditBox 
  const appendNumber= (number) => {
    // To find whether the EditBox value is "0" or not
    // "===" to check the codition along with datatype
    if (digit === 0) {
      setDigit(number.toString()) //to call setDigit to change the editbox value if the previous value is "0"
    }
    else{       //
      setDigit(digit.toString()+number.toString())    //to call setDigit if the previous value is not "0", to append the previous value with entered value
    }
  }
  
  // create "for loop" with map for the buttons with arrow function
  const listItems = numbers.map((number, index) =>
      // Button with onClick
      <li  className="button-numbers" key={number.toString()} onClick={()=> appendNumber(number)}>
           {number}
      </li>
      );
  return (
    // call "App", "App-header" and "ul-numbers" class in the App.css
    <div className="App">
      <header className="App-header">
      
      <ul className="ul-numbers">
      {/*to display "clear","Del" and "numbers" buttons here*/}
      <button type="button" className="button-cldel" onClick={()=>setDigit(0)}>Clear</button > 
      <button type="button" className="button-cldel">Del</button >
      </ul>
      <ul className="ul-numbers">{listItems} </ul>     
      </header>
    </div>
  );
};

export default Buttonnumbers
