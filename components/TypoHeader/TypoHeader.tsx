import * as React from "react"

import classnames from "classnames"

import styles from "./TypoHeader.module.scss"

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

export type TypeHeaderProps = {
  as: "h1" | "h2"
  children: React.ReactText
} & Omit<HeaderProps, "children">

const TypeHeaderMemo: React.FC<TypeHeaderProps> = (props) => {
  const { as, children, className, ...otherProps } = props
  const Header = React.createElement(
    as,
    { ...otherProps, className: classnames(className, styles.TypoHeader, styles[as]) },
    children
  )
  return Header
}

export const TypeHeader = React.memo(TypeHeaderMemo)

export default TypeHeader
