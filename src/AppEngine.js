import React from "react";
import "./App.css";
import { connect } from "react-redux";

const AppEngine = (props) => {
  return (
    <div className="App">
      <div className="Age-label">
        your age: <span>{props.age}</span>
      </div>
      <button onClick={props.onAgeUp}>Age UP</button>
      <button onClick={props.onAgeDown}>Age Down</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppEngine);
