import * as React from "react"

import { StoreProvider } from "easy-peasy"
import { store } from "../../store"

export type ProvidersProps = {}

export const Providers: React.FC<ProvidersProps> = (props) => {
  const { children } = props
  return <StoreProvider store={store}>{children}</StoreProvider>
}

export default Providers
