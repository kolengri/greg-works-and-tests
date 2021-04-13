import * as React from "react"
import NextImage, { ImageProps as NextImageProps } from "next/image"

export type ImageProps = {} & NextImageProps

const ImageMemo: React.FC<ImageProps> = (props) => {
  return <NextImage {...props} />
}

export const Image = React.memo(ImageMemo)

export default Image
