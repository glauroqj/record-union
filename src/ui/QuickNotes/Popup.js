import React, { Component } from 'react'

import { List, InsertItem } from '../List'

class Popup extends Component {

  render() {
    return (
      <div className="popup animated fadeIn">
        <List popup />
        <InsertItem />
      </div>
    )
  }
}

export default Popup