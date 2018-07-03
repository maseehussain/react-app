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
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Radium(Person);
