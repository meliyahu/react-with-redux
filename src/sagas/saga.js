import { takeLatest, put, delay, all } from "redux-saga/effects";
import {
  ageUpAction,
  ageUpAsyncAction,
  ageDownAction,
  ageDownAsyncAction,
} from "../store/reducer";

function* ageUpAsync(action) {
  console.log("in ageUpAsync() action=", action);
  yield delay(4000);
  yield put(ageUpAsyncAction(action.payload));
}

function* ageDownAsync(action) {
  console.log("in ageDownAsync() action=", action);
  yield delay(3000);
  yield put(ageDownAsyncAction(action.payload));
}
//generator function
export function* watchAgeUp() {
  console.log("in watchAgeUp()");
  // yield takeLatest("AGE_UP", ageUpAsync);
  yield takeLatest(ageUpAction.type, ageUpAsync);
  yield takeLatest(ageDownAction.type, ageDownAsync);
}
