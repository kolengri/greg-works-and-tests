import * as React from "react"
import { Icon, IconProps } from "../Icon"

import classnames from "classnames"
import styles from "./Loader.module.scss"

export type LoaderProps = {} & IconProps

const LoaderMemo: React.FC<LoaderProps> = (props) => {
  const { className, ...otherProps } = props
  return (
    <Icon
      className={classnames(styles.Loader, className, "animate-spin", "origin-center")}
      {...otherProps}
      name="Loading"
    />
  )
}

export const Loader = React.memo(LoaderMemo)

export default Loader
