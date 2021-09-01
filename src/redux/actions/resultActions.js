import * as actionTypes from './actionTypes';


export function setResult(result) {
    return {
        type: actionTypes.RESULT_SEARCH,
        payload: result
    }
}