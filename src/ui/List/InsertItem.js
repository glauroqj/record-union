import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

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
      <Grid container className="" spacing={16}>
        <Grid item xs={8}>
          <input type="text" value={text} onChange={this.handleInput} />
        </Grid>
        <Grid item xs={4}>
          <button onClick={this.sendNote}>CLICK</button>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = dispatch => ({
  addNote: text => dispatch(addNote(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(InsertItem)