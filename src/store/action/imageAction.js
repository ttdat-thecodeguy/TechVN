import * as Types from '../../constraints/ActionTypes'
import { getImage } from '../../service/imageService'




export const getImageRequest = () => {
    return dispatch => {
        getImage().then((res) => {
            dispatch({
                type: Types.GET_IMAGE,
                payload: res.data
            })
        }).catch((err) => {
            console.log(err)
        });
    }
}