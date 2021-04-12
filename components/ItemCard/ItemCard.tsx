import * as React from "react"

import { withSlots } from "react-slot-component"
import classnames from "classnames"

import { LocalImageProps, LocalImage } from "../LocalImage"
import styles from "./ItemCard.module.scss"

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
type HeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export type ItemCardProps = {} & DivProps
export type ItemCardSlots = {
  Image: LocalImageProps
  Header: HeaderProps
}

export const ItemCard = withSlots<ItemCardSlots, ItemCardProps>((props) => {
  const { className, children, slotProps, ...otherProps } = props
  return (
    <div className={classnames(styles.ItemCard, className)} {...otherProps}>
      <div className={styles.Content}>
        {[slotProps.Image, slotProps.Header].some(Boolean) && (
          <div className={styles.Preview}>
            {slotProps.Image && (
              <LocalImage
                {...slotProps.Image}
                className={classnames(slotProps.Image.className, styles.Image)}
              />
            )}
            {slotProps.Header && (
              <header className={classnames(styles.Header, slotProps.Header.className)}>
                {slotProps.Header.children}
              </header>
            )}
          </div>
        )}
      </div>
      {children}
    </div>
  )
})

export default ItemCard
