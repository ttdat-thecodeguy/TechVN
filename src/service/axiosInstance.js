import axios from 'axios'
import store from '../store'
import { MAIN_URL } from '../constraints/Config'
import { isAuth } from '../store/selector/authSelector'

const axiosInstance = axios.create({
    baseURL: MAIN_URL
})

axiosInstance.interceptors.request.use(config => {
    const state = store.getState()
    
    // config.params = config.params || {}
    const auth = isAuth(state)
    if (auth) config.headers['Authorization'] = 'Bearer ' + auth.token
    return config
})


export const InterceptorError = (store, history) => {
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {

        // if(!error.status){
        //     window.location = "/network-error"
        // }

        if(error.response.status === 403){
            history.push('/403')
        }
        if(error.response.status === 500){
            history.push('/500')
        }
    })
}


export default axiosInstance