import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

class Button extends PureComponent {

  chooseIcon = (type) => {
    if (type === 'remove') return faTimes
    if (type === 'send') return faPlus
    if (type === 'balloon') return faCommentAlt
    return ''
  }

  render() {
    const { type, click } = this.props

    const btnClassName = classNames('btn', {
      remove: type === 'remove',
      send: type === 'send',
      balloon: type === 'balloon'
    })

    return (
      <>
        <button className={btnClassName} type="button" onClick={click}>
          <FontAwesomeIcon icon={this.chooseIcon(type)} />
        </button>
      </>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string
}

Button.defaultProps = {
  type: ''
}

export default Button