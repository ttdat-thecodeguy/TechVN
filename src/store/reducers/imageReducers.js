import * as Types from '../../constraints/ActionTypes'

const initState = []

const imageReducers = (state = initState, action) => {
    switch (action.type) {
        case Types.GET_IMAGE:
            return action.payload
        default:
            return state;
    }
}
export default imageReducers;