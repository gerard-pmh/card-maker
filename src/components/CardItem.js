import React, { Component, PropTypes } from 'react'
import TodoTextInput from './TodoTextInput'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, tree, content) => {
    if (tree.length === 0) {
      this.props.deleteCard(id)
    } else {
      this.props.editCard(id, tree, content)
    }
    this.setState({ editing: false })
  }

  render() {
    const { card, completeCard, deleteCard } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div>
          <div onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </div>
          <button onClick={() => deleteCard(card.id)} />
        </div>
      )
    }

    return (
      <li>
      </li>
    )
  }
}
