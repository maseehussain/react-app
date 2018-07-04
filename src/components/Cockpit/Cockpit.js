import React from "react";
import Aux from "../../hoc/Aux";

const cockpit = props => {
  return (
    //styleroot needed from radium to execute the @media query
    <Aux>
      <button onClick={props.login}>Log In</button>
      <h1>React-App</h1>
      <p>Wassssssss up!</p>
    </Aux>
  );
};

export default cockpit;
