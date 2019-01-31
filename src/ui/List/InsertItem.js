import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Loader from '../../ui/Loader'
import { Button } from '../Button'

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

  sendNote = (e) => {
    const { addNote } = this.props
    const { text } = this.state
    addNote(text)
    this.setState({ text: '' })
  }

  sendForm = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.sendNote()
    }
  }

  render() {
    const { text } = this.state
    return (
      <form onKeyDown={this.sendForm}>
        <div className="row">
          <div className="col-xs-12">
            <div className="insert-item">
                <input type="text" value={text} onChange={this.handleInput} />
                <Button type="send" click={this.sendNote} />
            </div>
          </div>
        </div>
      </form>
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