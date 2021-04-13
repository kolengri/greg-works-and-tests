import * as React from "react"

import classnames from "classnames"
import styles from "./Container.module.scss"

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type ContainerProps = {} & DivProps

const ContainerMemo: React.FC<ContainerProps> = (props) => {
  const { children, className, ...otheProps } = props
  return (
    <div className={classnames(styles.Container, className)} {...otheProps}>
      {children}
    </div>
  )
}

export const Container = React.memo(ContainerMemo)

export default Container
