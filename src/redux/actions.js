import { SELECTED_RECIPE } from "./actionTypes"

export const SelectedRecipe = value => dispatch => {
  return dispatch({
    type: SELECTED_RECIPE,
    value,
  })
}