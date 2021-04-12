import * as React from "react"

import Head from "next/head"
import { withSlots } from "react-slot-component"

import classnames from "classnames"

import styles from "./BaseLayout.module.scss"

type TitleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>
type ElementProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type BaseLayoutProps = {} & DivProps
export type BaseLayoutSlots = {
  Title: {
    children: React.ReactText
  } & Omit<TitleProps, "children">
  Header: ElementProps
  Main: ElementProps
  Footer: ElementProps
}

export const BaseLayout = withSlots<BaseLayoutSlots, BaseLayoutProps>((props) => {
  const { children, slotProps, className, ...otherProps } = props

  return (
    <div className={classnames(className, styles.BaseLayout)} {...otherProps}>
      <Head>{slotProps.Title && <title {...slotProps.Title} />}</Head>
      {slotProps.Header && <header {...slotProps.Header} />}
      {(slotProps.Main || children) && (
        <main {...slotProps.Main} className={classnames(styles.Main, slotProps.Main?.className)}>
          {slotProps.Main?.children || children}
        </main>
      )}
      {slotProps.Footer && <footer {...slotProps.Footer} />}
    </div>
  )
})

export default BaseLayout
