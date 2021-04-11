import * as React from "react"

import { BaseLayout } from "../BaseLayout"

export type HomeLayoutProps = {
  children: React.ReactNode
}

const HomeLayoutMemo: React.FC<HomeLayoutProps> = (props) => {
  const { children } = props
  return (
    <BaseLayout>
      <BaseLayout.Title>Test</BaseLayout.Title>
      {children}
    </BaseLayout>
  )
}

export const HomeLayout = React.memo(HomeLayoutMemo)

export default HomeLayout
