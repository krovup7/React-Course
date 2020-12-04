import { ADD_TO_BASKET } from "../types/types";

let initialState = {
  basket: []

};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {

      return {
        state,
        basket: [...state.basket, action.item]
      }
    }

    default:
      return state;
  }
};