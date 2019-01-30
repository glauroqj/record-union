import React from 'react'
import PropTypes from 'prop-types'

const Loader = props => (
  <div className="row center-xs">
    <div className="col-xs-12">
      <div className="loading">{props.text}</div>
    </div>
  </div>
)

Loader.propTypes = {
  text: PropTypes.string.isRequired
}

export default Loader
