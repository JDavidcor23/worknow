import {partner} from '../types/types'

const partnerlist ={}


export const partnerListReducer = (state = partnerlist, action) =>{
    switch (action.type) {
        case partner.listpartner:
            return {
                partner: {...action.payload}
            }
    
        default:
            return state;
    }
}