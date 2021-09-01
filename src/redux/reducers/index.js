import { combineReducers } from "redux";
import companyListReducer from './companyListReducer'
import resultReducer from './resultReducer'

const rootReducer = combineReducers({
    companyListReducer,
    resultReducer
})

export default rootReducer;