import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import { List } from '../ui/List'
import { QuickNotes } from '../ui/QuickNotes'

/** actions */
import { fetchInitialList } from '../store/actions/noteActions'
import { Loader } from '../ui/Loader';

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
      <Grid container className="" spacing={16}>
        <Grid item xs={12}>
          {listLoading 
            ? <Loader />
            : [<List key={1} />, <QuickNotes key={2} />]
          }
        </Grid>
      </Grid>
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