import {typesjobs} from '../types/types'

const initialState = {
    jobs: []
}

export const registerJobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesjobs.registerjobs:
            return {
                jobs: [action.payload]
            }
        case typesjobs.listjobs:
            return {
                jobs: [...action.payload]
            }
        case typesjobs.deletejobs:
            return {
                jobs: state.jobs.filter(pro => pro.name !== action.payload)
            }
        default:
            return state;
    }
}