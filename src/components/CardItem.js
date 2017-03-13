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
            <div className='card-footer'>
              <p className='card-footer-item'>
                <small>
                  created: {card.created.toLocaleString()}
                </small>
              </p>
              <p className='card-footer-item'>
                <small>
                  modified: {card.modified.toLocaleString()}
                </small>
              </p>
              <a className='card-footer-item' onClick={() => deleteCard(card.id)}>
                <span className='icon'>
                  <i className='fa fa-trash-o' aria-hidden='true'></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
