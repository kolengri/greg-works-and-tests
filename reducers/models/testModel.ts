import { Action, Thunk, thunk, action } from "easy-peasy"

export interface ObjectWithId {
  id: string
}

export interface DataModel<DataItem extends ObjectWithId> {
  data: DataItem[]
  fetch: Thunk<DataModel<DataItem>>
  fetched: Action<DataModel<DataItem>, DataItem[]>
}

export const dataModel = <Items extends ObjectWithId>(
  endpoint: () => Promise<Items[]>
): DataModel<Items> => ({
  data: [],
  fetched: action((state, items) => {
    state.data = items
  }),
  fetch: thunk(async (actions, payload) => {
    const data = await endpoint()
    actions.fetched(data)
  }),
})
