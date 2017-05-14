import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import identity from './identity'
import offers from './offers'
import profiles from './profiles'


const dex = combineReducers({
    form: formReducer,
    router: routerReducer,
    identity,
    offers,
    profiles
})

export default dex
