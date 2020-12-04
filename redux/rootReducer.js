import { combineReducers } from "redux";
import { itemsReducer } from "./reducers/itemsReducer";
import { basketReducer } from "./reducers/basketReducer";

export const rootReducer = combineReducers({
  items: itemsReducer,
  basket:basketReducer,

});
