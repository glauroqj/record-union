import React from 'react'
import PropTypes from 'prop-types'

const ListItem = props => (
  <ul className="list">
    {props.list && props.list.map((item, index) => (
      <li key={index}>
        {item}
      </li>
    ))}
  </ul>
)

ListItem.propTypes = {
  list: PropTypes.array
}

export default ListItem