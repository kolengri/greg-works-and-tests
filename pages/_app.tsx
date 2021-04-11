import React from "react"
import { AppProps } from "next/app"
import { Providers } from "../components"

import "../styles/globals.css"

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
