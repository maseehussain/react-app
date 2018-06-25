import React from "react";
import ReactDOM from "react-dom";
import Person from "./Person/Person.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Masee Hussain</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Person />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
