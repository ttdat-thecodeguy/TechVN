import * as Types from '../../constraints/ActionTypes'
import { getAll } from '../../service/typeService'


export const getTypeRequest = () => {
    return dispatch => {
        getAll().then((res) => {
            dispatch({
                type: Types.GET_TYPE,
                payload: res.data
            })
            dispatch({
                type: Types.LOADING_TOGGLE,
                payload: false
            });
        }).catch((err) => {
            console.log(err)
        });
    }
}

// export const getTypeByLevelRequest = (level) => {
//     return dispatch => {
//         getAllByLevel(level).then((res) => {
//             dispatch({
//                 type: Types.GET_TYPE_BY_LEVEL,
//                 payload: res.data
//             })
//         }).catch((err) => {
//             console.log(err)
//         });
//     }
// }
