import './App.css';
import { useContext  } from "react";
import { ButtonContext } from "./App";
function Buttonnumbers() {
  const buttoncont = useContext(ButtonContext);
  const {digit, setDigit}=buttoncont
  const numbers = ['/','*','-','+',9,8,7,4,5,6,1,2,3,0,'%','.','='];
  const appendNumber= (number) => {
    // To 
    if (digit === 0) {
      setDigit(number.toString())
    }
    else{
      setDigit(digit.toString()+number.toString())
    }
    
  }
  
  const listItems = numbers.map((number, index) =>
      <li  className="button-numbers" key={number.toString()} onClick={()=> appendNumber(number)}>
           {number}
      </li>
      );
  
  
  
  // const clearCount=()=>{
  //   setClearr((clearr)=>'')
  // }
  return (
    <div className="App">
      <header className="App-header">
      
      <ul className="ul-numbers">
      
      <button type="button" className="button-cldel" onClick={()=>setDigit(0)}>Clear</button > 
      <button type="button" className="button-cldel">Del</button >
      </ul>
      <ul className="ul-numbers">{listItems} </ul>
      {/* <ButtonContext.Provider value={clearr}>
        {buttons}
      </ButtonContext.Provider> */}
         {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Welcome to my new project
        </a>
  */}
      
      </header>
    </div>
  );
};

export default Buttonnumbers
