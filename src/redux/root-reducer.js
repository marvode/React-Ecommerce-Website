import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import { categoryReducer } from "./category/category-reducers";

const persistConfig = {
	key: "root",
	storage,
	whitlist: ["user", "cart"],
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	categories: categoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
