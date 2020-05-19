import {combineReducers} from "redux";
import {products} from "./products";
import {user} from "./user";

export const rootReducer = combineReducers({
    products,
    user
});
