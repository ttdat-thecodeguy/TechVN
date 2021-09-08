import * as Types from "../../constraints/ActionTypes";


const initState = false

const loadingReducers = (state = initState, action) => {
    switch (action.type) {
        case Types.LOADING_TOGGLE:
            return action.payload; 
        default:
            return state;
    }
}

export default loadingReducers;