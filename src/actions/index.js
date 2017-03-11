import * as types from '../constants/ActionTypes'

export const addCard = text => ({ type: types.ADD_TODO, text })
export const deleteCard = id => ({ type: types.DELETE_TODO, id })
export const editCard = (id, text) => ({ type: types.EDIT_TODO, id, text })
