import {jobsList} from '../types/types'

const initialState = {
    jobsList: []
}


export const jobsListReducer = (state = initialState, action) =>{
    switch (action.type) {
        case jobsList.watchjobs:
            return {
                jobsList: [...action.payload]
            }
    
        default:
            return state;
    }
}