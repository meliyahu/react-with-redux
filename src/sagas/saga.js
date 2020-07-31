// import delay from "redux-saga";
// import { takeEvery,put, delay } from "redux-saga/effects";
import { takeLatest, put, delay } from "redux-saga/effects";

function* ageUpAsync(action) {
  console.log("action=", action);
  console.log("ageUpAsync() before delay 4000");
  yield delay(4000);
  console.log("in ageUpSync() after delay 4000");
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}
//generator function
export function* watchAgeUp() {
  // yield takeEvery("AGE_UP", ageUpAsync);
  console.log("in watchAgeUp()");
  yield takeLatest("AGE_UP", ageUpAsync);
}
