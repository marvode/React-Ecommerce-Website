import { all, call } from "redux-saga/effects";

import fetchCategoriesStart from "./category/category-sagas";
import fetchCollectionStart from "./collection/collection-saga";

export default function* rootSaga() {
	yield all([call(fetchCategoriesStart), call(fetchCollectionStart)]);
}
