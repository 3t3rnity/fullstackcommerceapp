import { combineReducers } from 'redux'
import { appReducer } from './appreducer'
import { headerReducer } from './headerreducer'
import { mainpageReducer } from './mainpagereducer'
import { usersReducer } from './usersreducer'
import { cartReducer } from './cartreducer'
 

export const rootReducer = combineReducers({
    app: appReducer,
    header: headerReducer,
    mainpage: mainpageReducer,
    users: usersReducer,
    cart: cartReducer,
})