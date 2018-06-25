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

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Masee", age: 36 },
        { name: event.target.value, age: 22 },
        { name: "Kadie", age: 32 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>React-App</h1>
        <button style={style} onClick={() => this.switchNameHandler("Hussain")}>
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
          changed={this.nameChangeHandler}
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
