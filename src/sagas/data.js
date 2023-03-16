import { call, put, takeLatest } from "redux-saga/effects";
import dataActions, { Types } from "./../actions/dataAction";
import getData from "./../services/data";
export function* getUserRequest(action) {
  const { payload } = action;
  const pageNumber = payload.page;
  try {
    const response = yield fetch(
      `https://zite.zite.io/api/v2/project/?my_projects=True&page_no=${pageNumber}`,
      {
        method: "GET",
        headers: {
          Authorization: "Token 1f78420bfd4d2fdc9c52851098e3419787a5dbe7",
        },
      }
    );
    const data = yield response.json();
    yield put(dataActions.dataSuccess({ data }));
  } catch (error) {
    yield put(dataActions.dataFailure());
  }
}
function* dataSaga() {
  yield takeLatest(Types.DATA_REQUEST, getUserRequest);
}
export default dataSaga;
