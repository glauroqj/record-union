import React from 'react'
import PropTypes from 'prop-types'

const ErrorBag = props => (
  <>
    {props.errorbag.length > 0 && (
      <div className="errorbag">
        {props.errorbag.map((item, index) => (
          <div>
            <span>{`${item} `}</span>
          </div>
        ))}
      </div>
    )}
  </>
)

ErrorBag.propTypes = {
  errorbag: PropTypes.arrayOf(PropTypes.string),
}

export default ErrorBag