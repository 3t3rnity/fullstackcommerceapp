import { CHANGE_FLAG, MODAL_STATE } from '../actionTypes/appTypes'

const initialState = {
    flag: 'hello niggas',
    modal: false,
    serverDomen: 'http://localhost:4000/'
}

export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_FLAG:
            return {...state, flag: action.text}
        case MODAL_STATE:
            return {...state, modal: !state.modal}
        default:
            return state
    }
    
}