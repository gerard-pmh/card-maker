import React, { Component, PropTypes } from 'react'
import CardItem from './CardItem'

export default class MainSection extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { cards, actions } = this.props
    return (
      <section className='section'>
        <div className='container'>
          {cards.map(card =>
            <CardItem key={card.id} card={card} {...actions} />
          )}
        </div>
      </section>
    )
  }
}
