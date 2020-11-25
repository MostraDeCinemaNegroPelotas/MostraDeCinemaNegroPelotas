import React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import store from '../store'
import 'styles/main.scss'
import 'react-modal-video/scss/modal-video.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>4º Mostra de Cinema Negro de Pelotas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
