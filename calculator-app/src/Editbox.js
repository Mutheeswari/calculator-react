import './App.css';
import { useContext  } from "react";
import { ButtonContext } from "./App";
function Editbox() {
  const buttoncont = useContext(ButtonContext);
  const {digit}=buttoncont;
  return (
    <div className="App">
      <header className="App-header">
      <input type="text" id="edittxt" name="edittxt" class="set-width" value={digit} dir="rtl">
      
        {/*
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Welcome to Versatile product
          
        </a>
        <a className="App-link1"></a>
          <p class="solid">calculator</p>
  */}
      </input>
      </header>
    </div>
  );
}

export default Editbox;
