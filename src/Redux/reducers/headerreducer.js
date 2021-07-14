import { MENU_STATE } from '../actionTypes/headerTypes'

const initialState = {
    menuFlag: false,
    menuItems: [
        {url: '', title: 'first'},
        {url: '', title: 'second'},
        {url: '', title: 'third'},
        {url: '', title: ''},
        {url: '', title: ''},
    ]
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_STATE:
            return {...state, menuFlag: !state.menuFlag}

        default:
            return state
    }
}