import React, { Component } from 'react'

import { Popup } from './'
import { Button } from '../Button'

class QuickNotes extends Component {

  render() {
    return (
      <div className="quick-notes">
        <Popup />
        <Button type="balloon" />
      </div>
    )
  }
}

export default QuickNotes