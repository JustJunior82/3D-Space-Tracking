import logo from './logo.svg';
import './App.css';
import AxiosHelloWorld from './AxiosHelloWorld';
import FetchHelloWorld from './FetchHelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AxiosHelloWorld/>
        <FetchHelloWorld/>
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
