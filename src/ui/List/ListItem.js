import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../Button'

const ListItem = props => (
  <ul>
    {props.list && props.list.map((item, index) => (
      <li className="list-item" key={index}>
        <div>{item}</div>
        <Button type="remove" click={props.removeNoteList(index)} />
      </li>
    ))}
  </ul>
)

ListItem.propTypes = {
  list: PropTypes.array,
  removeNoteList: PropTypes.func
}

export default ListItem