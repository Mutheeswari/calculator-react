import './App.css';

function Buttonnumbers() {
  const numbers = ['C','/','*','X',7,8,9,'-',4,5,6,'+',1,2,3,'%',0,'.'];
  const listItems = numbers.map((number, index) =>
      <li  className="button-numbers" key={number.toString()}>
          {number}
      </li>
      );
  
  return (
    <div className="App">
      <header className="App-header">
      <ul className="ul-numbers">
      <button type="button" className="button-cldel">Clear</button > 
      <button type="button" className="button-cldel">Del</button >
      </ul>
      <ul className="ul-numbers">{listItems} </ul>
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
}

export default Buttonnumbers;
