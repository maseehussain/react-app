import React, { Component } from "react";
import Person from "./Person/Person.js";

import "./styles.css";

class App extends Component {
  state = {
    persons: [
      { name: "Masee", age: 35 },
      { name: "Maiwand", age: 22 },
      { name: "Kadie", age: 32 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 36 },
        { name: "Maiwand", age: 22 },
        { name: "Kadie", age: 32 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React-App</h1>
        <button onClick={() => this.switchNameHandler("Hussain")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Masee")}
        >
          My hobbies: Football
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
