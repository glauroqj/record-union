import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../Button'
import { ErrorBag } from '../ErrorBag'

const ListItem = props => (
  <ul>
    {props.list && props.list.map((item, index) => (
      <React.Fragment key={index}>
        <li id={index} className="list-item animated fadeIn">
          <div className="text-item">
            <span>{`${index}`}</span>{`${item.text}`}
            {(props.remove.indexOf(item.id) > - 1) && (
              <div className="text-item-remove">Removing...</div>
            )}
          </div>
          <div className="btn-item">
            <Button 
              type="remove" 
              click={props.removeNoteList(item.id)}
              loading={(props.remove.indexOf(item.id) > - 1)}
            />
          </div>
        </li>
        <ErrorBag errorbag={item.errorbag} />
      </React.Fragment>
    ))}
  </ul>
)

ListItem.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  removeNoteList: PropTypes.func
}

export default ListItem