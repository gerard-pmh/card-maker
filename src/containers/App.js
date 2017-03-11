import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as CardActions from '../actions'

const App = ({cards, actions}) => (
  <div>
    <Header addCard={actions.addCard} />
    <MainSection cards={cards} actions={actions} />
  </div>
)

App.propTypes = {
  cards: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CardActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
