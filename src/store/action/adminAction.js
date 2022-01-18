import * as Types from '../../constraints/ActionTypes'
import { getAllUsers } from '../../service/adminService'
import { loadAction } from '../../store/action/loadingAction'
export const getAllUsersRequest = () => {
    console.log("eee")
    return dispatch => {
        getAllUsers().then(res => {
            
            dispatch(loadAction(false))

            dispatch({
                type: Types.GET_USERS,
                payload: res.data || []
            })
            console.log("eee - zzz")

        })
    }
}

