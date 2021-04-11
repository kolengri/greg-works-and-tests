import * as React from "react"

import Head from "next/head"

import { withSlots } from "react-slot-component"

type TitleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>

export type BaseLayoutProps = {}
export type BaseLayoutSlots = {
  Title: {
    children: string
  } & Omit<TitleProps, "children">
}

export const BaseLayout = withSlots<BaseLayoutSlots, BaseLayoutProps>((props) => {
  const { children, slotProps } = props
  return (
    <>
      <Head>{slotProps.Title && <title {...slotProps.Title}></title>}</Head>
      {children}
    </>
  )
})

export default BaseLayout
