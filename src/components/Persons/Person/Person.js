import React from "react";
import Radium from "radium";
import "./Person.css";

class Person extends React.Component {
  render() {
    const style = {
      "@media (min-width: 500px)": {
        width: "450px"
      }
    };
    return (
      <div className="Person" style={style}>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <p>
          Name:
          <input
            type="name"
            onChange={this.props.nameChange}
            value={this.props.name}
          />
        </p>
        <p>
          Age:
          <input
            type="age"
            onChange={this.props.ageChange}
            value={this.props.age}
          />
        </p>
      </div>
    );
  }
}

export default Radium(Person);