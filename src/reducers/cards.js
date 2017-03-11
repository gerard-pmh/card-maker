import { ADD_CARD, DELETE_CARD, EDIT_CARD } from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    tree: [
      { type: 'title', content: 'this is a title' },
      { type: 'paragraph', content: 'this is a paragraph' }
    ]
  }
]

export default function cards (state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return [
        {
          id: state.reduce((maxId, card) => Math.max(card.id, maxId), -1) + 1,
          text: action.text
        },
        ...state
      ]

    case DELETE_CARD:
      return state.filter(card =>
        card.id !== action.id
      )

    case EDIT_CARD:
      return state.map(card =>
        card.id === action.id
          ? { ...card, tree: action.tree, content: action.content }
          : card
      )

    default:
      return state
  }
}
