import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import { List } from '../ui/List'
import { Balloon } from '../ui/Balloon'

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
    const { notes } = this.props.state
    return (
      <Grid container className="" spacing={16}>
        <Grid item xs={12}> 
          <List state={notes} />
          <Balloon />
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