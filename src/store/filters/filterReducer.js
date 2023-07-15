import {ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS} from './filterActions'

export const filterReducer = (state = [], action) => {
    switch(action.type){
        case ADD_FILTER: {
            if (state.includes(action.payload)) {
                return state
            }
            return [...state, action.payload]
        }
        case REMOVE_FILTER: {
            return state.filter(item => item !== action.payload)
        }
        case CLEAR_FILTERS: {
            return []
        }
        default: {
            return state
        }
    }
}