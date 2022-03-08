
import {user} from '../types/types'

const usuario = {}


export const userReducer = (state = usuario, action) =>{
    switch (action.type) {
        case user.registeruserdb:
            return {
                usuario: action.payload
            }
        case user.listuser:
            return {
                usuario: {...action.payload}
            }
        default:
            return state;
    }
}