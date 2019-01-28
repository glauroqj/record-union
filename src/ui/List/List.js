import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import { ListItem } from '../List'

class List extends Component {
  render() {
    const { list } = this.props.state.notes
    return (
      <>
        {list.length === 0 
          ? <h5>No quick notes</h5>
          : <ListItem list={list} />
        }
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  state
})

export default connect(mapStateToProps)(List)
