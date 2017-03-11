import React, { Component, PropTypes } from 'react'
import CardItem from './CardItem'

export default class MainSection extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  render() {
    const { cards, actions } = this.props
    return (
      <section>
        <ul>
          {cards.map(card =>
            <CardItem key={card.id} card={card} {...actions} />
          )}
        </ul>
      </section>
    )
  }
}
