import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../types/types";
import { itemsAPI } from "../../api/api";

export function asyncMiddleWare({dispatch}) {
  return function(next) {
    return function (action) {
      if (action.type === FETCH_PRODUCTS_REQUEST) {
        return itemsAPI.getItems().then((data) => {
          dispatch({type:FETCH_PRODUCTS_SUCCESS, items: data.items});
          }, (error) => {
            dispatch({type:FETCH_PRODUCTS_FAILURE, payload: error});
          }
        )
      }
      return next(action);
    }
  }
}