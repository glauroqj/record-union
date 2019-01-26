import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import { ListItem, InsertItem } from '../../ui/List'
import Loader from '../../ui/Loader'

class List extends Component {
  render() {
    return (
      // <Loader />
      <ul className="list">
        <InsertItem />
      </ul>
      // <ListItem />
    )
  }
}

export default List