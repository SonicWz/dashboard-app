import {createStore, combineReducers} from 'redux'
import {positionReducer} from "./positions/positionReducer";
import {filterReducer} from "./filters/filterReducer";

const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)