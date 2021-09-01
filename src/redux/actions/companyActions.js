import * as actionTypes from "./actionTypes";

export function getCompaniesSuccess(companies) {
  return {
    type: actionTypes.GET_COMPANIES_SUCCESS,
    payload: companies,
  };
}
export function getCompanies() {
  return function (dispatch) {
    let url = "https://5f7335deb63868001615f557.mockapi.io/list";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCompaniesSuccess(result)));
  };
}
