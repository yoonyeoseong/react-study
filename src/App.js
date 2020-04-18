import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = "React";
  const style = {
    backgroundColor: 'black'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style = {style}
        >
          {name === 'React' && "Learn 리액트"}
        </a>
      </header>
    </div>
  );
}

export default App;
