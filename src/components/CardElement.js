import React, { Component, PropTypes } from 'react'

export default class CardElement extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    content: PropTypes.string,
    editing: PropTypes.bool
  }

  state = {
    text: this.props.content || this.props.type
  }

  handleSubmit = e => {
    const content = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(content)
    }
  }

  handleChange = e => {
    this.setState({ content: e.target.value })
  }

  render() {
    if (this.props.editing) {
    return (
      <input
        type="text"
        autoFocus="true"
        value={this.state.content}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
    } else {
      switch (this.props.type) {
        case 'title':
          return <h1>{this.text}</h1>
        case 'paragraph':
          return <p>{this.text}</p>
      }
    }
  }
}
