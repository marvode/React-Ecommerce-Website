import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

import CategoryTypes from "./category-types";
import {
	fetchCategoriesSuccess,
	fetchCategoriesFailure,
} from "./category-actions";

export function* fetchCategoriesAsync() {
	try {
		const response = yield axios.get("/categories");
		yield put(fetchCategoriesSuccess(response.data.data));
	} catch (error) {
		yield put(fetchCategoriesFailure(error));
	}
	yield console.log("i am fired");
}

export function* fetchCategoriesStart() {
	yield takeEvery(CategoryTypes.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}
