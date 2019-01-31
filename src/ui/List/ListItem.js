import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../Button'

const ListItem = props => (
  <ul>
    {props.list && props.list.map((item, index) => (
      <li className="list-item" key={index}>
        <div className="text-item">
          <span>{`${index} `}</span>{`${item.text}`}
        </div>
        <div className="btn-item">
          <Button type="remove" click={props.removeNoteList(index)} />
        </div>
      </li>
    ))}
  </ul>
)

ListItem.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  removeNoteList: PropTypes.func
}

export default ListItem