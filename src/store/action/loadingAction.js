import * as Types from '../../constraints/ActionTypes'

export const loadAction = state => {
    return {
        type: Types.LOADING_TOGGLE,
        payload: state,
    }
}