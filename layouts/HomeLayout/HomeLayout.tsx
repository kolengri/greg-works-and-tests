import * as React from "react"
import { withSlots } from "react-slot-component"

import { PageLayout, PageLayoutSlots } from "../PageLayout"

export type HomeLayoutProps = {
  children: React.ReactNode
}

export type HomeLayoutSlots = {} & PageLayoutSlots

export const HomeLayout = withSlots<HomeLayoutSlots, HomeLayoutProps>((props) => {
  const { children, slotProps } = props
  return <PageLayout propagateSlotProps={slotProps}>{children}</PageLayout>
})

export default HomeLayout
