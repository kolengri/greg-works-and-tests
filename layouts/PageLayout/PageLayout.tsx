import * as React from "react"

import { withSlots } from "react-slot-component"
import { BaseLayout, BaseLayoutSlots } from "../BaseLayout"
import { TypeHeader } from "../../components"

export type PageLayoutProps = {}
export type PageLayoutSlots = {} & BaseLayoutSlots

const PageLayoutMemo = withSlots<PageLayoutSlots, PageLayoutProps>((props) => {
  const { children, slotProps } = props

  return (
    <BaseLayout propagateSlotProps={slotProps}>
      {slotProps.Title && <TypeHeader as="h1">{slotProps.Title.children}</TypeHeader>}
      {children}
    </BaseLayout>
  )
})

export const PageLayout = React.memo(PageLayoutMemo)

export default PageLayout
