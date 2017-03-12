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
      <div className='columns'>
        <div className='column is-half is-offset-one-quarter'>
          <div className='card'>
            {card.tree.map(node =>
              <CardElement key={node.id} cardId={card.id} node={node} editCard={editCard} />
            )}
          </div>
        </div>
        <div className='column'>
          <a className='delete' onClick={() => deleteCard(card.id)}></a>
        </div>
      </div>
    )
  }
}
