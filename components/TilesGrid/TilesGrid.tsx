import * as React from "react"

import classnames from "classnames"

import styles from "./TilesGrid.module.scss"

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export type TilesGridProps = {} & DivProps

const randTransforms = () => {
  const classes = [
    styles.Tile_transform1,
    styles.Tile_transform2,
    styles.Tile_transform3,
    styles.Tile_transform4,
    styles.Tile_transform5,
    styles.Tile_transform6,
  ]
  return classes[Math.floor(Math.random() * classes.length)]
}

const TilesGridMemo: React.FC<TilesGridProps> = (props) => {
  const { children, className } = props
  const tiles = React.Children.toArray(children)

  return (
    <div className={classnames(className, styles.TilesGrid)}>
      {tiles.map((tile, index) => (
        <div className={classnames(styles.Tile, "transform", randTransforms())} key={index}>
          {tile}
        </div>
      ))}
    </div>
  )
}

export const TilesGrid = React.memo(TilesGridMemo)

export default TilesGrid
