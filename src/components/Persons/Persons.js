import React from "react";
import Person from "./Person/Person";

class Persons extends React.Component {
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
          change={event => this.props.change(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
