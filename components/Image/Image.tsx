import * as React from "react"

export type ImageProps = {}

const ImageMemo: React.FC<ImageProps> = (props) => {
  return <>Image</>
}

export const Image = React.memo(ImageMemo)

export default Image
