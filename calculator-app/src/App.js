import logo from './logo.svg';
import './App.css';
import Editbox from './Editbox'
import Buttonnumbers from './Buttonnumbers'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Editbox />
        <Buttonnumbers/>
      </header>
    </div>
  );
}

export default App;
