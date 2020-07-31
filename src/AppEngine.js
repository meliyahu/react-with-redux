import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { ageUpAction, ageDownAction } from "./store/reducer";

const AppEngine = (props) => {
  console.log("On entry props=", props);

  const incrementAge = () => {
    console.log("incrementing AGE NOW!");
    props.onAgeUp(ageUpAction({ age_change: 12 }));
  };

  const decrementAge = () => {
    console.log("decrementing AGE NOW!");
    props.onAgeDown(ageDownAction({ age_change: 2 }));
  };
  return (
    <div className="App">
      <div className="Age-label">
        your age: <span>{props.age}</span>
      </div>
      <button onClick={incrementAge}>Age UP</button>
      <button onClick={decrementAge}>Age Down</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch, action) => {
  return {
    onAgeUp: (action) => dispatch(action),
    onAgeDown: (action) => dispatch(action),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppEngine);
