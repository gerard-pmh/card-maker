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
    editing: false,
    isFirstEdit: true
  }

  toggleEdit = () => {
    this.setState({ ...this.state, editing: !this.state.editing })
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
    this.setState({ ...this.state, isFirstEdit: false, content: e.target.value })
  }

  render() {
    const { content, editing, isFirstEdit } = this.state
    const { cardId, node } = this.props

    let innerContent = content

    let inputAttributes = {
      autoFocus: 'true',
      placeholder: content,
      value: isFirstEdit ? '' : content,
      onChange: this.handleChange,
      onKeyDown: this.handleSubmit
    }

    let editIcon = (
      <span className='icon'>
        <i className={`fa fa-${editing ? 'save' : 'pencil-square-o'}`}></i>
      </span>
    )

    switch (node.type) {
      case 'title':
        if (editing) {
          innerContent =
            <input
              className='input'
              type="text"
              {...inputAttributes} />
        }
        return (
          <header className='card-header'>
            <p className='card-header-title'>
              {innerContent}
            </p>
            <a className="card-header-icon" onClick={editing ? this.handleSave : this.toggleEdit}>
              {editIcon}
            </a>
          </header>
        )
      case 'paragraph':
        if (editing) {
          innerContent =
            <textarea
              className='textarea'
              type="text"
              {...inputAttributes} />
        }
        return (
          <div className='card-content'>
            <div className='content'>
              <p>{innerContent}</p>
              <p className='has-text-centered'>
                <a onClick={editing ? this.handleSave : this.toggleEdit}>
                  {editIcon}
                </a>
              </p>
            </div>
          </div>
        )
    }
  }
}
