import React, { Component } from "react";
import Person from "./Person/Person.js";

import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "", name: "Masee", age: 35 },
      { id: "", name: "Maiwand", age: 22 },
      { id: "", name: "Kadie", age: 32 }
    ],
    otherState: "some other event",
    showPersons: false
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Hamid", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Menat", age: 19 }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React-App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
