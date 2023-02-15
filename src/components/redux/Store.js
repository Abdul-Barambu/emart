import { legacy_createStore as createStore } from "redux";
import { rootReducers } from "./reducer";

export const Store = createStore(rootReducers)