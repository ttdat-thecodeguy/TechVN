import * as Types from '../../constraints/ActionTypes'
import { getImage, uploadImage } from '../../service/imageService'
import { loadAction } from './loadingAction'



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


export const uploadImageRequest = (data) => {
    return dispatch => {
        uploadImage(data).then(res => {
            dispatch(loadAction(false))
            dispatch({
                type: Types.UPLOAD_IMAGE,
                payload: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}
