import React from "react";
import Radium, { StyleRoot } from "radium";
import Persons from "../components/Persons/Persons";

import "./App.css";

class App extends React.Component {
  state = {
    persons: [
      { id: "123", name: "Masee", age: 35 },
      { id: "456", name: "Hamid", age: 45 },
      { id: "789", name: "Menat", age: 19 }
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

  ageChangeHandler = (event, id) => {
    //Update the state, findIndex takes a function as an input just like map and execute the function.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //Get a copy of the person itself and access the person index, using the spread operator
    const person = { ...this.state.persons[personIndex] };
    //this code does the same as the above const person = Object.assign({}, this.state.persons[personIndex]);
    //Update the person.
    person.age = event.target.value;
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
      cursor: "pointer",
      //With radium I can create a pseudo selector
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            nameChange={this.nameChangeHandler}
            ageChange={this.ageChangeHandler}
          />
        </div>
      );
      //We assign a new value to one of the style properties
      style.backgroundColor = "red";
      //We use a valid pseudo selector with radium
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
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
      //styleroot needed from radium to execute the @media query
      <StyleRoot>
        <div className="App">
          <h1>React-App</h1>
          <p className={classes.join(" ")}>Wassssssss up!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
