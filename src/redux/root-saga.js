import { all, call } from "redux-saga/effects";

import { fetchCategoriesStart } from "./category/category-sagas";

export default function* rootSaga() {
	yield all([call(fetchCategoriesStart)]);
}
