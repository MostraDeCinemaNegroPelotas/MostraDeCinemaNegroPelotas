import React from 'react'

import App from 'next/app'
import Head from 'next/head'

import 'styles/main.scss'

import '@brainhubeu/react-carousel/lib/style.css'

class MyApp extends App {
  return () {
    <Head>
      <title>4º Mostra de Cinema Negro de Pelotas</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  }
}

export default MyApp
