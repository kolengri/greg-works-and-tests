import { createStore, createTypedHooks } from "easy-peasy"

import model, { StoreModel } from "./model"

export const storeHooks = createTypedHooks<StoreModel>()
export const store = createStore(model)

if (process.env.NODE_ENV === "development") {
  if ((module as any).hot) {
    ;(module as any).hot.accept("./model", () => {
      store.reconfigure(model)
    })
  }
}
