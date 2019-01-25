import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import {Loader} from '../ui/Loader/index'

/** actions */
import { addNote, deleteNote, listNotes } from '../store/actions/noteActions'

// import fetch from 'isomorphic-unfetch'
/* pages */
// import Home from '../components/pages/Home'
// import Header from '../components/Header'

// /* css */
// import '../styles/main.scss'

class Home extends Component {
  static getInitialProps = async ({ reduxStore, req }) => {
    console.log('GET INITIAL PROPS HOME')
    // const json = await fetch('https://api.github.com/users/glauroqj')
    // const user = await json.json()
    // console.log('USER', user)
    // return {
    //   user
    // }
  }

  componentDidMount() {
    this.props.dispatch(listNotes())
  }

  chooseTemplate = () => {
    const { loading, list } = this.props.state.notes
    console.log('STATE: ', this.props.state.notes)
    if (loading) {
      return <Loader />
    }
    return <div>{list}</div>
  }

  render() {
    return (
      <Grid container className="" spacing={16}>
        <Grid item xs={12}>
          {this.chooseTemplate()}
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  state
})

export default connect(mapStateToProps)(Home)