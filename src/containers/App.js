import React from "react";
import Radium, { StyleRoot } from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

import "./App.css";

export const AuthContext = React.createContext(false);

class App extends React.Component {
  state = {
    persons: [
      { id: "123", name: "Masee", age: 35 },
      { id: "456", name: "Hamid", age: 45 },
      { id: "789", name: "Menat", age: 19 }
    ],
    otherState: "some other event",
    showPersons: false,
    toggleCLicked: 0,
    authenticated: false
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
    //now update the age within the array
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    //inline style
    const style = {
      font: "inherit",
      backgroundColor: "white",
      color: "black",
      border: "1px solid green",
      padding: "8px",
      cursor: "pointer",
      borderRadius: "5px",
      boxShadow: "0 10px 15px green",
      outline: "none",
      //With radium I can create a pseudo selector
      ":hover": {
        backgroundColor: "lightgreen",
        color: "white"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            deletePerson={this.deletePersonHandler}
            nameChange={this.nameChangeHandler}
            ageChange={this.ageChangeHandler}
          />
        </div>
      );
      //We assign a new value to one of the style properties
      style.backgroundColor = "white";
      style.boxShadow = "0 10px 20px red";
      style.border = "1px solid red";
      //We use a valid pseudo selector with radium
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "white"
      };
    }

    return (
      //styleroot needed from radium to execute the @media query
      <StyleRoot>
        <div className="App">
          <Cockpit login={this.loginHandler} />
          <button style={style} onClick={this.togglePersonsHandler}>
            Show Persons
          </button>
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
