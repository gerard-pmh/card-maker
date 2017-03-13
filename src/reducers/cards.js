import { ADD_CARD, DELETE_CARD, EDIT_CARD } from '../constants/ActionTypes'

function generateNewCard () {
  const today = new Date()
  return {
    id: 0,
    tree: [
      { id: 0, type: 'title', content: 'Title' },
      { id: 1, type: 'paragraph', content: 'Content ...' }
    ],
    created: today,
    modified: today
  }
}
const initialState = [ generateNewCard() ]

export default function cards (state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return [
        {
          ...generateNewCard(),
          id: state.reduce((maxId, card) => Math.max(card.id, maxId), -1) + 1
        },
        ...state
      ]

    case DELETE_CARD:
      return state.filter(card =>
        card.id !== action.id
      )

    case EDIT_CARD:
      return state.map(card =>
        card.id === action.cardId
          ? {
            ...card,
            tree: card.tree.map(node =>
              node.id === action.nodeId
                ? { ...node, content: action.nodeContent }
                : node
            ),
            modified: new Date()
          }
          : card
      )

    default:
      return state
  }
}
