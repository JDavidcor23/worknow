
import {user} from '../types/types'

const initialState = {
    user: []
}


export const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case user.registeruserdb:
            return {
                user: [action.payload]
            }
        case user.listuser:
            return {
                user: [...action.payload]
            }
        default:
            return state;
    }
}