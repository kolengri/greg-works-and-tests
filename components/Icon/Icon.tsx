import * as React from "react"

import * as Icons from "./Icons"

type BaseProps = React.SVGProps<SVGSVGElement>

export type IconProps = {} & BaseProps

export type IconOwnProps = {
  name: keyof typeof Icons
}

export const IconMemo: React.FC<IconProps & IconOwnProps> = (props) => {
  const { name, ...otherProps } = props
  const Ico = Icons[name]

  if (!Ico) {
    console.error(`Icon name ${name} not found`)
    return null
  }

  return <Ico {...otherProps} />
}

export const Icon = React.memo(IconMemo)

export default Icon
