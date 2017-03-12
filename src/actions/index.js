import * as types from '../constants/ActionTypes'

export const addCard = () => ({ type: types.ADD_CARD })
export const deleteCard = id => ({ type: types.DELETE_CARD, id })
export const editCard = (cardId, nodeId, nodeContent) => ({ type: types.EDIT_CARD, cardId, nodeId, nodeContent })
