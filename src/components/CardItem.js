import React, { Component, PropTypes } from 'react'
import CardElement from './CardElement'

export default class TodoItem extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    deleteCard: PropTypes.func.isRequired,
  }

  render() {
    const { card, deleteCard, editCard } = this.props
    return (
        <div>
          <div>
            {card.tree.map(node =>
              <CardElement key={node.id} cardId={card.id} node={node} editCard={editCard} />
            )}
          </div>
          <button onClick={() => deleteCard(card.id)}>-</button>
        </div>
    )
  }
}
