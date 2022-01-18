import * as Types from "../../constraints/ActionTypes";


const initState = {
    users: [],
    blogs: [],
};

const adminReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.GET_USERS:
            return {...state, users: action.payload }
        case Types.GET_BLOGS:
            return {...state, blogs: action.payload}
        default:
            return []
    }
}

export default adminReducer;