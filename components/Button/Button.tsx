import * as React from "react"

import classnames from "classnames"

import styles from "./Button.module.scss"
import { Loader } from "../Loader"

type BaseProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonProps = {
  loading?: boolean
} & BaseProps

const ButtonMemo: React.FC<ButtonProps> = (props) => {
  const { children, className, loading, disabled, title, ...otherProps } = props
  const off = loading || disabled
  const defaultTitle = typeof children === "string" && !title ? children : title

  return (
    <button
      title={defaultTitle}
      className={classnames(styles.Button, className)}
      disabled={off}
      {...otherProps}
    >
      <span
        className={classnames(styles.Content, {
          [styles.Content_off]: off,
        })}
      >
        {children}
      </span>
      {loading && (
        <div className={styles.Loader}>
          <Loader />
        </div>
      )}
    </button>
  )
}

export const Button = React.memo(ButtonMemo)

export default Button
