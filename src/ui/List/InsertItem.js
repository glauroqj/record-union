import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Button } from '../Button'

/** actions */
import { 
  addNote,
  updateListDone
 } from '../../store/actions/noteActions'

class InsertItem extends Component {
  componentDidUpdate() {
    const { updateList } = this.props.state.notes
    if (updateList) this.updateList()
  }

  state = {
    text: '',
    placeholder: ''
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
    this.setState({ 
      text: '',
      placeholder: 'Sending...' 
    })
  }

  sendForm = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.sendNote()
    }
  }

  updateList = () => {
    const { updateListDone } = this.props
    const popupList = document.querySelectorAll('.list-popup ul')[0]

    this.setState({
      text: '',
      placeholder: ''
    })
    document.getElementById('insert-input').focus()
    popupList.scrollIntoView({block: 'end', behavior: 'smooth'})

    /** send dispatch to updateList false */
    updateListDone()
  }

  render() {
    const { btnLoading } = this.props.state.notes

    const { 
      text,
      placeholder
     } = this.state

    return (
      <form onKeyDown={this.sendForm}>
        <div className="row">
          <div className="col-xs-12">
            <div className="insert-item">
              <input 
                id="insert-input"
                type="text" 
                value={text} 
                onChange={this.handleInput} 
                disabled={btnLoading}
                placeholder={placeholder}
                autoFocus={true}
              />
              <Button 
                type="send" 
                click={this.sendNote} 
                loading={btnLoading} 
              />
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
  addNote: text => dispatch(addNote(text)),
  updateListDone: () => dispatch(updateListDone())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(InsertItem)