import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'

/* store */
import withReduxStore from '../store/withReduxStore'
import { Provider } from 'react-redux'

/* css */
import '../styles/main.scss'

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps, reduxStore} = this.props
    return <Container>
      <Head>
        <title>Save Quick Notes</title>
      </Head>
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  }
}
export default withReduxStore(MyApp)
