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
          <a className='nav-item' onClick={this.props.addCard}>
            <span className='icon is-medium'>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    )
  }
}
