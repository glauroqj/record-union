import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import { ListItem, InsertItem } from '../List'
import { Loader } from '../Loader'

class List extends Component {
  render() {
    const { list, listLoading } = this.props.state
    return (
      <>
        {listLoading 
          ? <Loader />
          : [<ListItem list={list} />, <InsertItem />]
        }
      </>
    )
  }
}

export default List