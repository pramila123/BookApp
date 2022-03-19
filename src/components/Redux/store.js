import { createStore,combineReducers } from "redux";
import { bookItems } from "./BookReducer";
const root=combineReducers(
    {
        bookItems
    }
)
const store=createStore(root)
export default store