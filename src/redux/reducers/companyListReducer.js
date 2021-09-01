import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function companyListReducer(
  state = initialState.companies,
  action
) {
  switch (action.type) {
    case actionTypes.GET_COMPANIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
