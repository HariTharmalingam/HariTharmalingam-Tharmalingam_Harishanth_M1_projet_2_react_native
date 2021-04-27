import { SELECTED_RECIPE } from "../actionTypes";

const defaultState = [];

export const recipesList = (state = defaultState, action) => {
  switch (action.type) {
    case SELECTED_RECIPE:
    return {
      recipe: action.value
    }
    default:
      return state;
  }
};
