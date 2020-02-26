import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Josh Perez';
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  const element = (
    <div className="testClassName">
      Render the functions {getGreeting()}
    </div>
  );
  
  function formatName(user) {
    return user.firstName + ' && ' + user.lastName;
  }
  function getGreeting() {
    if (typeof user !== "undefined") {
      return <h1>Welcome , {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {element}
      </header>
    </div>
  );
}

export default App;
