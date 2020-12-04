import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from "../types/types";


let initialState = {
  items: [],
  error:''
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
      return { items: action.items };
    }
    case FETCH_PRODUCTS_FAILURE: {
      return { error: action.payload };
    }

    default:
      return state;
  }
};

