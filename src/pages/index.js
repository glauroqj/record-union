import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import { List } from '../ui/List'

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
    return (
      <Grid container className="" spacing={16}>
        <Grid item xs={12}>
          <h2>{this.props.state.notes.list.length}</h2>  
          <List />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)