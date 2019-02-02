import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Popup } from './'
import { Button } from '../Button'

class QuickNotes extends Component {

  state = {
    isCollapsed: true
  }

  tooglePopup = (e) => {
    const { isCollapsed } = this.state
    const newValue = !isCollapsed
    this.setState({ isCollapsed: newValue })
  }

  render() {
    const { list } = this.props
    const { isCollapsed } = this.state
    const gridClass =classNames('col-lg-offset-9 col-xs-8 col-sm-8 col-md-6 col-lg-3')

    return (
      <div className="row end-xs bottom-xs">
        <div className={gridClass}>
          <div className="quick-notes animated bounceIn">
              {!isCollapsed && (
                <Popup />
              )}
              <Button type="balloon" totalNotes={list.length} click={this.tooglePopup} />
          </div>
        </div>
      </div>
    )
  }
}

QuickNotes.defaultProps = {
  list: []
}

QuickNotes.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

export default QuickNotes