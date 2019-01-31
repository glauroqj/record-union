import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { Loader } from '../Loader'

class Button extends PureComponent {

  chooseIcon = (type) => {
    if (type === 'remove') return faTimes
    if (type === 'send') return faPlus
    if (type === 'balloon') return faCommentAlt
    return ''
  }

  showTotal = () => {
    const { type, totalNotes } = this.props
    const totalClass =  classNames('total-notes',{
      dots: totalNotes >= 1000
    })
    if (type === 'balloon') return <div className={totalClass}>{totalNotes}</div>
  }

  render() {
    const { 
      type,
      click, 
      loading 
    } = this.props

    const btnClassName = classNames('btn', {
      remove: type === 'remove',
      send: type === 'send',
      balloon: type === 'balloon',
      disabled: loading
    })

    return (
      <>
        <button 
          className={btnClassName} 
          type="button" 
          onClick={click}
          disabled={loading}
        >
          {loading
            ? <Loader size={14} color="#e74c3c" />
            : <FontAwesomeIcon icon={this.chooseIcon(type)} />
          }
          {this.showTotal()}
        </button>
      </>
    )
  }
}

Button.defaultProps = {
  totalNotes: 0,
  loading: false
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  totalNotes: PropTypes.number,
  loading: PropTypes.bool
}

export default Button