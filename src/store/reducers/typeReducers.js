import * as Types from '../../constraints/ActionTypes'

const initState = []

const typeReducers = (state = initState, action) => {
    switch (action.type) {
        case Types.GET_TYPE:
            return action.payload
        default:
            return state;
    }
}
export default typeReducers;