import * as React from "react"

import { withSlots } from "react-slot-component"
import classnames from "classnames"

import { ImageProps, Image } from "../Image"
import styles from "./ItemCard.module.scss"

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
type HeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export type ItemCardProps = {} & DivProps
export type ItemCardSlots = {
  Image: ImageProps
  Header: HeaderProps
}

export const ItemCard = withSlots<ItemCardSlots, ItemCardProps>((props) => {
  const { className, children, slotProps, ...otherProps } = props
  return (
    <div className={classnames(styles.ItemCard, className)} {...otherProps}>
      {slotProps.Header && (
        <header className={classnames(styles.Header, slotProps.Header.className)}>
          {slotProps.Header.children}
        </header>
      )}
      {children}
    </div>
  )
})

export default ItemCard
