import * as React from "react"

import { withSlots } from "react-slot-component"
import { BaseLayout, BaseLayoutSlots } from "../BaseLayout"
import { TypeHeader } from "../../components"

export type PageLayoutProps = {}
export type PageLayoutSlots = {} & BaseLayoutSlots

export const PageLayout = withSlots<PageLayoutSlots, PageLayoutProps>((props) => {
  const { children, slotProps } = props

  return (
    <BaseLayout propagateSlotProps={slotProps}>
      {slotProps.Title && (
        <BaseLayout.Header {...slotProps.Title}>
          <TypeHeader as="h1">{slotProps.Title.children}</TypeHeader>
        </BaseLayout.Header>
      )}
      {children}
    </BaseLayout>
  )
})

export default PageLayout
