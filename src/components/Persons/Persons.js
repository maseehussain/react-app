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
          nameChange={event => this.props.nameChange(event, person.id)}
          ageChange={event => this.props.ageChange(event, person.id)}
          deletePerson={event => this.props.deletePerson(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
