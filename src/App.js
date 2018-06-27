import React, { Component } from "react";
import Person from "./Person/Person.js";
import Radium from "radium";

import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "123", name: "Masee", age: 35 },
      { id: "456", name: "Maiwand", age: 22 },
      { id: "789", name: "Kadie", age: 32 }
    ],
    otherState: "some other event",
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    //Update the state, findIndex takes a function as an input just like map and execute the function.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //Get a copy of the person itself and access the person index, using the spread operator
    const person = { ...this.state.persons[personIndex] };
    //this code does the same as the above const person = Object.assign({}, this.state.persons[personIndex]);
    //Update the person.
    person.name = event.target.value;
    //now update the name within the array
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    //will update the person
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    //inline style
    const style = {
      backgroundColor: "green",
      color: "white",
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
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      //We assign a new value to one of the style properties
      style.backgroundColor = "red";
    }

    //Adjusting the class names dynamically and adding class names.

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>React-App</h1>
        <p className={classes.join(" ")}>Wassssssss up!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
