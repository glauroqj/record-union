import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { List } from '../ui/List'
import { QuickNotes } from '../ui/QuickNotes'
import { Loader } from '../ui/Loader'

/** actions */
import { fetchInitialList } from '../store/actions/noteActions'

class Home extends Component {
  static getInitialProps = async ({ reduxStore, req }) => {
    console.log('GET INITIAL PROPS HOME')
  }

  componentDidMount() {
    const { fetchInitialList } = this.props
    fetchInitialList()
  }

  render() {
    const { listLoading } = this.props.state.notes
    return (
      <>
        <div className="container-fluid">
          {listLoading 
            ? <Loader text="Loading..." />
            : [<List key={1} />, <QuickNotes key={2} />]
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = dispatch => ({
  fetchInitialList: () => dispatch(fetchInitialList())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home)