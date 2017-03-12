import React, { PropTypes, Component } from 'react'

export default class Header extends Component {
  static propTypes = {
    addCard: PropTypes.func.isRequired
  }

  render() {
    return (
      <header>
        <h1>Cards</h1>
        <button onClick={this.props.addCard}>+</button>
      </header>
    )
  }
}
