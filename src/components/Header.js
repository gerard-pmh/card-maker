import React, { PropTypes, Component } from 'react'

export default class Header extends Component {
  static propTypes = {
    addCard: PropTypes.func.isRequired
  }

  render() {
    return (
      <nav className='nav'>
        <div className='nav-center'>
          <span className='nav-item'>
            <h1 className='title'>Card Maker</h1>
          </span>
          <span className='nav-item'>
            <a className='button is-success' onClick={this.props.addCard}>
              <span className='icon'>
                <i className="fa fa-plus" aria-hidden="true"></i>
              </span>
              <span>Add a card</span>
            </a>
          </span>
        </div>
      </nav>
    )
  }
}
