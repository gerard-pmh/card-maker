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

  toggleEdit = () => {
    this.setState({ ...this.state, editing: true })
  }

  handleSubmit = e => {
    const nodeContent = e.target.value.trim()
    if (e.which === ENTER_KEY_CODE) {
      this.handleSave()
    }
  }

  handleSave = () => {
    this.props.editCard(this.props.cardId, this.props.node.id, this.state.content)
    this.setState({ ...this.state, editing: false })
  }

  handleChange = e => {
    this.setState({ ...this.state, content: e.target.value })
  }

  render() {
    let innerContent = this.state.content
    switch (this.props.node.type) {
      case 'title':
        if (this.state.editing) {
          innerContent =
            <input
              className='input'
              type="text"
              autoFocus="true"
              placeholder={this.state.content}
              onChange={this.handleChange}
              onKeyDown={this.handleSubmit}
              onBlur={this.handleSave} />
        }
        return (
          <header className='card-header'>
            <p className='card-header-title'>{innerContent}</p>
            <a className="card-header-icon" onClick={this.toggleEdit}>
              <span className="icon">
                <i className="fa fa-pencil-square-o"></i>
              </span>
            </a>
          </header>
        )
      case 'paragraph':
        if (this.state.editing) {
          innerContent =
            <textarea
              className='textarea'
              type="text"
              autoFocus="true"
              placeholder={this.state.content}
              onChange={this.handleChange}
              onKeyDown={this.handleSubmit}
              onBlur={this.handleSave} />
        }
        return (
          <div onDoubleClick={this.handleDoubleClick} className='card-content'>
            <div className='content'>
              {innerContent}
            <a className="card-header-icon" onClick={this.toggleEdit}>
              <span className="icon">
                <i className="fa fa-pencil-square-o"></i>
              </span>
            </a>
            </div>
          </div>
        )
    }
  }
}
