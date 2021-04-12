import React from "react"
import NativeDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document"

class Document extends NativeDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NativeDocument.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Baskervville:ital@1&amp;family=Montserrat:wght@400;600;700;900&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
