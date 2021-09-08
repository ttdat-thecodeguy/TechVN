import * as Types from '../../constraints/ActionTypes'

import { getAll } from '../../service/typeService'

export const getType = types => {
    return {
        type: Types.GET_TYPE,
        payload: types
    }
}


export const getTypeRequest = () => {
    return dispatch => {
        getAll().then((res) => {
            dispatch(getType(res.data))
        }).catch((err) => {
            console.log(err)
        });
    }
}