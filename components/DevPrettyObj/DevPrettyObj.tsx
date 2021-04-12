import * as React from "react"

export type DevPrettyObjProps = {
  obj: any
}

const DevPrettyObjMemo: React.FC<DevPrettyObjProps> = (props) => {
  const { obj } = props
  return <pre>{JSON.stringify(obj, null, 4)}</pre>
}

export const DevPrettyObj = React.memo(DevPrettyObjMemo)

export default DevPrettyObj
