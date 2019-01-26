import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Loader from '../../ui/Loader'

class ListItem extends Component {
  render() {
    const { list } = this.props
    return (
      <>
        {list.map(() => (
          <li>

          </li>
        ))}
      </>
    )
  }
}

export default ListItem