import { CHANGE_FLAG, MODAL_STATE } from '../actionTypes/appTypes'

export const changeFlag = text => ({
    type: CHANGE_FLAG,
    text
})

export const changeModalState = () => ({
    type: MODAL_STATE
})
