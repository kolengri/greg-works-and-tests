import * as React from "react"
import { withSlots } from "react-slot-component"
import classnames from "classnames"

import { Button, ButtonProps } from "../Button"
import styles from "./Pagination.module.scss"

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type PaginationProps = {
  total: number
  skip: number
  limit: number
} & DivProps

export type PaginationSlots = {
  PrevButton: ButtonProps
  NextButton: ButtonProps
}

const disabledPrevNext = (
  value: number,
  step: number,
  min: number,
  max: number
): [boolean, boolean] => [value - step < min, value + step >= max]

export const Pagination = withSlots<PaginationSlots, PaginationProps>((props) => {
  const { slotProps, total, skip, limit, className, ...otherProps } = props
  const [disabledPrev, disabledNext] = disabledPrevNext(skip, limit, 0, total)

  return (
    <div {...otherProps} className={classnames(className, styles.Pagination)}>
      {slotProps.PrevButton && (
        <Button {...slotProps.PrevButton} disabled={slotProps.PrevButton.disabled || disabledPrev}>
          {slotProps.PrevButton.children || "Previous"}
        </Button>
      )}
      {slotProps.NextButton && (
        <Button {...slotProps.NextButton} disabled={slotProps.NextButton.disabled || disabledNext}>
          {slotProps.NextButton.children || "Next"}
        </Button>
      )}
    </div>
  )
})

export default Pagination
