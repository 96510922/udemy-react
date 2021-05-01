// import logo from './logo.svg';
// import './App.css';

import React from "react";

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">
         bar
      </label>
        <input type="text" onChange={() => {console.log("I an Z")}} />;
    </React.Fragment>
  )
  
}

export default App;
