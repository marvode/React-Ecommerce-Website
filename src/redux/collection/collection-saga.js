import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

import CollectionTypes from "./collection-types";
import {
	fetchCollectionSuccess,
	fetchCollectionFailure,
} from "./collection-actions";

function* fetchCollectionAsync({ categoryId }) {
	console.log(categoryId);
	try {
		const response = yield axios.get(`/categories/${categoryId}/products`);
		yield put(fetchCollectionSuccess(response.data.data));
	} catch (error) {
		yield put(fetchCollectionFailure(error));
	}
}

export default function* fetchCollectionStart() {
	yield takeLatest(
		CollectionTypes.FETCH_COLLECTION_START,
		fetchCollectionAsync
	);
}
