import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../Button'
import { ErrorBag } from '../ErrorBag'

const ListItem = props => (
  console.log(props.list),
  <ul>
    {props.list && props.list.map((item, index) => (
      <React.Fragment key={index}>
        <li id={index} className="list-item">
          <div className="text-item">
            <span>{`${index}`}</span>{`${item.text}`}
            {item.remove && (
              <div className="text-item-remove">Removing...</div>
            )}
          </div>
          <div className="btn-item">
            <Button 
              type="remove" 
              click={props.removeNoteList(index)}
              loading={item.remove}
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