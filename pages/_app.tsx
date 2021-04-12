import "../styles/fonts.scss"
import "../styles/globals.css"
import "../styles/_utils.scss"

import React from "react"
import { AppProps } from "next/app"

import { Providers } from "../components"

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
