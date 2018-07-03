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

    const inputStyle = {
      borderRadius: "5px",
      padding: "10px"
    };

    return (
      <div className="Person" style={style}>
        <p>
          I am <strong>{this.props.name}</strong> and I am{" "}
          <strong>{this.props.age}</strong>
          years old!
        </p>
        <p>{this.props.children}</p>
        <p>
          Name<br />
          <input
            style={inputStyle}
            type="name"
            onChange={this.props.nameChange}
            value={this.props.name}
          />
        </p>
        <p>
          Age<br />
          <input
            style={inputStyle}
            type="age"
            onChange={this.props.ageChange}
            value={this.props.age}
          />
        </p>
        <button onClick={this.props.deletePerson}>Delete</button>
      </div>
    );
  }
}

export default Radium(Person);
