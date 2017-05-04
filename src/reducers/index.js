import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import identity from './identity'


const dex = combineReducers({
    form: formReducer,
    identity
})

export default dex
