const initialState = {
  age: 20,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "AGE_UP_ASYNC":
      console.log("in reducer. action.type is ", action.type);
      newState.age += action.value;
      return newState;
    case "AGE_DOWN":
      console.log("in reducer. action.type is ", action.type);
      newState.age -= action.value;
      return newState;
    default:
      return newState;
  }
};

export default reducer;
