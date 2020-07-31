import { createAction, combineReducers, createReducer } from "@reduxjs/toolkit";

export const ageUpAction = createAction("AGE_UP");
export const ageUpAsyncAction = createAction("AGE_UP_ASYNC");
export const ageDownAction = createAction("AGE_DOWN");
export const ageDownAsyncAction = createAction("AGE_DOWN_ASYNC");

const initialState = {
  age: 20,
};

// const reducer = (state = initialState, action) => {
//   const test = ageUpAsyncAction({ value: 'Testing' });
//   console.log("Action ageUpAsync =", test);
//   console.log("Action ageUpAsync payload =", test.payload);
//   const newState = { ...state };
//   switch (action.type) {
//     case "AGE_UP_ASYNC":
//       console.log("in reducer. action.type is ", action.type);
//       newState.age += action.value;
//       return newState;
//     case "AGE_DOWN":
//       console.log("in reducer. action.type is ", action.type);
//       newState.age -= action.value;
//       return newState;
//     default:
//       return newState;
//   }
// };

const reducer = createReducer(initialState, {
  [ageUpAsyncAction.type]: (state, action) => {
    const { age_change } = action.payload;
    state.age += age_change;
  },
  [ageDownAsyncAction.type]: (state, action) => {
    const { age_change } = action.payload;
    state.age -= age_change;
  },
});

export default reducer;
