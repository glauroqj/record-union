import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { ListItem } from '../List'

/** actions */
import { removeNote } from '../../store/actions/noteActions'

class List extends Component {

  removeNoteList = (id) => (e) => {
    const { removeNote } = this.props
    removeNote(id)
  }

  render() {
    const { 
      list,
      remove
    } = this.props.state.notes
    const { popup } = this.props
    const gridClass = classNames({
      'col-xs-12': popup,
      'col-xs-12 col-sm-8 col-md-6 col-lg-4': !popup
    })
    const listClass = classNames('list animated fadeIn', {
      'list-popup': popup,
      'container-list': !popup
    })

    const listItemProps = {
      list,
      remove,
      removeNoteList: this.removeNoteList
    }

    return (
      <div className="row">
        <div className={gridClass}>
          <div className={listClass}>
            {list.length === 0 
              ? <div className="no-notes">No quick notes</div>
              : <ListItem {...listItemProps} />
            }
          </div>
        </div>
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
