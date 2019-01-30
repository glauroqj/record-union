import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Loader from '../../ui/Loader'

/** actions */
import { addNote } from '../../store/actions/noteActions'

class InsertItem extends Component {
  state ={
    text: ''
  }

  handleInput = (e) => {
    const { state } = this
    const { type, value } = e.target
    state[type] = value
    this.setState(state)
  }

  sendNote = () => {
    const { addNote } = this.props
    const { text } = this.state
    addNote(text)
  }

  render() {
    const { text } = this.state
    return (
      <div className="insert-item">
        <input type="text" value={text} onChange={this.handleInput} />
        <button onClick={this.sendNote}>CLICK</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = dispatch => ({
  addNote: text => dispatch(addNote(text))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(InsertItem)