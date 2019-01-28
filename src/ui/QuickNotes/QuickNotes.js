import React, { Component } from 'react'

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
    const { isCollapsed } = this.state
    return (
      <div className="quick-notes">
        {!isCollapsed && (
            <Popup />
        )}
        <Button type="balloon" click={this.tooglePopup} />
      </div>
    )
  }
}

export default QuickNotes