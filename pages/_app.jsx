import React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import store from '../store'
import 'styles/main.scss'
import '@brainhubeu/react-carousel/lib/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
