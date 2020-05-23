import { all, call } from "redux-saga/effects";

import fetchCategoriesStart from "./category/category-sagas";
import fetchCollectionStart from "./collection/collection-saga";
import userSagas from "./user/user-sagas";

export default function* rootSaga() {
	yield all([
		call(fetchCategoriesStart),
		call(fetchCollectionStart),
		call(userSagas),
	]);
}
