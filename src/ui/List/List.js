import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'

import { ListItem } from '../List'

class List extends Component {
  render() {
    const { list } = this.props.state.notes
    const { popup } = this.props
    const listClass = classNames('list', {
      'list-popup': popup
    })

    return (
      <div className={listClass}>
        {list.length === 0 
          ? <h5>No quick notes</h5>
          : <ListItem list={list} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  state
})

export default connect(mapStateToProps)(List)
