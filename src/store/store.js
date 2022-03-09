import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import {userReducer} from '../reducers/registerUserDBReducer'
import {registerJobsReducer} from '../reducers/jobsReducers'
import {jobsListReducer} from '../reducers/jobsListReducers'
const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    jobs:registerJobsReducer,
    usuario:userReducer,
    listjobs: jobsListReducer,
    partner: jobsListReducer
})


export const store = createStore(
    reducers,
     composeEnhancers( 
         applyMiddleware(thunk))
   
)