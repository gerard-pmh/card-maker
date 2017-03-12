import React, { Component, PropTypes } from 'react'

const ENTER_KEY_CODE = 13

export default class CardElement extends Component {
  static propTypes = {
    node: PropTypes.object.isRequired,
    cardId: PropTypes.number.isRequired,
    editCard: PropTypes.func.isRequired
  }

  state = {
    content: this.props.node.content,
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ ...this.state, editing: true })
  }

  handleSubmit = e => {
    const nodeContent = e.target.value.trim()
    if (e.which === ENTER_KEY_CODE) {
      this.props.editCard(this.props.cardId, this.props.node.id, nodeContent)
      this.setState({ ...this.state, editing: false })
    }
  }

  handleChange = e => {
    this.setState({ ...this.state, content: e.target.value })
  }

  render() {
    if (this.state.editing) {
    return (
      <input
        type="text"
        autoFocus="true"
        value={this.state.content}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
    } else {
      switch (this.props.node.type) {
        case 'title':
          return <h1 onDoubleClick={this.handleDoubleClick}>{this.state.content}</h1>
        case 'paragraph':
          return <p onDoubleClick={this.handleDoubleClick}>{this.state.content}</p>
      }
    }
  }
}
