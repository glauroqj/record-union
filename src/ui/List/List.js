import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { ListItem } from '../List'

/** actions */
import { removeNote } from '../../store/actions/noteActions'

class List extends Component {

  removeNoteList = (id) => (e) => {
    const { removeNote } = this.props
    console.log('REMOVE NOTE: ', id, e)
    removeNote(id)
  }

  render() {
    const { list } = this.props.state.notes
    const { popup } = this.props
    const listClass = classNames('list', {
      'list-popup': popup
    })

    const listItemProps = {
      list,
      removeNoteList: this.removeNoteList
    }

    return (
      <div className={listClass}>
        {list.length === 0 
          ? <h5>No quick notes</h5>
          : <ListItem {...listItemProps} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = dispatch => ({
  removeNote: id => dispatch(removeNote(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(List)
