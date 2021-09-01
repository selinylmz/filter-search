import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function resultReducer(
  state = initialState.searchResult,
  action
) {
  switch (action.type) {
    case actionTypes.RESULT_SEARCH:
      return action.payload;
    default:
      return state;
  }
}
