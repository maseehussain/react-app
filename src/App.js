import React, { Component } from "react";
import Person from "./Person/Person.js";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React-App</h1>
        <button>Switch Name</button>
        <Person name="Masee" age="35" />
        <Person name="Maiwand" age="22">
          My hobbies: Football
        </Person>
        <Person name="Kadie" age="32" />
      </div>
    );
  }
}

export default App;
