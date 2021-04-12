import * as React from "react"

type ImgProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export type ImageProps = {} & ImgProps

const ImageMemo: React.FC<ImageProps> = (props) => {
  return <img {...props} />
}

export const Image = React.memo(ImageMemo)

export default Image
