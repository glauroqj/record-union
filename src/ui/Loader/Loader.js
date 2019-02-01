import React from 'react'
import PropTypes from 'prop-types'
import { HalfCircleSpinner } from 'react-epic-spinners'

const Loader = props => (
  <div className="row center-xs">
    <div className="col-xs-12">
      <div className="loading">
        <HalfCircleSpinner size={props.size} color={props.color} className="spinner" />
        <span>{props.text}</span>
      </div>
    </div>
  </div>
)

Loader.defaultProps = {
  text: ''
}

Loader.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}

export default Loader
