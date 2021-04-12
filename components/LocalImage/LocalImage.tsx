import * as React from "react"
import { IMAGES_PUBLIC_API_PATH } from "../../config/env"

import { Image, ImageProps } from "../Image"

export type LocalImageProps = {} & ImageProps

const LocalImageMemo: React.FC<LocalImageProps> = (props) => {
  const { src, ...otherProps } = props
  return <Image {...otherProps} src={`${IMAGES_PUBLIC_API_PATH}/${src}`} />
}

export const LocalImage = React.memo(LocalImageMemo)

export default LocalImage
