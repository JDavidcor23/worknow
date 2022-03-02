import {typespjobs} from '../types/types'

const initialState = {
    jobs: []
}

export const registerJobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typespjobs.registerjobs:
            return {
                jobs: [action.payload]
            }
        case typespjobs.listjobs:
            return {
                jobs: [...action.payload]
            }
        case typespjobs.deletejobs:
            return {
                jobs: state.jobs.filter(pro => pro.name !== action.payload)
            }
        default:
            return state;
    }
}