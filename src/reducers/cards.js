import { ADD_CARD, DELETE_CARD, EDIT_CARD } from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    tree: [
      { id: 0, type: 'title', content: 'this is a title' },
      { id: 1, type: 'paragraph', content: 'this is a paragraph' }
    ]
  }
]

export default function cards (state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return [
        {
          id: state.reduce((maxId, card) => Math.max(card.id, maxId), -1) + 1,
          tree: [
            { id: 0, type: 'title', content: 'this is a title' },
            { id: 1, type: 'paragraph', content: 'this is a paragraph' }
          ]
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
            )
          }
          : card
      )

    default:
      return state
  }
}
