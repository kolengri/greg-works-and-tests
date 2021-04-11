import { Action, action, Generic, generic, Thunk, ThunkOn, thunk, thunkOn } from "easy-peasy"

type PossibleTypes = string | number | Record<string | number, any> | any[]

export type DataStoreModel<DataType extends PossibleTypes, FetchPayload = never> = {
  coveredLoading: boolean
  data: Generic<DataType>
  error: null | string
  loading: boolean
  refetchArgs: Generic<null | FetchPayload>
  success: boolean
  //   Thunk Actions
  fetch: Thunk<DataStoreModel<DataType, FetchPayload>, FetchPayload>
  coveredFetch: Thunk<DataStoreModel<DataType, FetchPayload>>
  refetch: Thunk<DataStoreModel<DataType, FetchPayload>>
  // Listeners
  onFetch: ThunkOn<DataStoreModel<DataType, FetchPayload>, FetchPayload>
  onCoveredFetch: ThunkOn<DataStoreModel<DataType, FetchPayload>, FetchPayload>
  onRefetch: ThunkOn<DataStoreModel<DataType>>
  // Actions
  fetchStart: Action<DataStoreModel<DataType, FetchPayload>, boolean>
  fetchError: Action<DataStoreModel<DataType, FetchPayload>, string>
  fetchSuccess: Action<DataStoreModel<DataType, FetchPayload>, DataType>
  fetchEndSuccess: Action<DataStoreModel<DataType, FetchPayload>>
  fetchEnd: Action<DataStoreModel<DataType, FetchPayload>>
  storeFetchArgs: Action<DataStoreModel<DataType, FetchPayload>, FetchPayload>
  resetStore: Action<DataStoreModel<DataType, FetchPayload>>
}

export type DataModelReducer = {
  <DataType extends PossibleTypes, FetchPayload = never>(
    initialData: DataType,
    endpoint: (payload: FetchPayload) => Promise<DataType>
  ): DataStoreModel<DataType, FetchPayload>
}

const copyData = (data: any) => JSON.parse(JSON.stringify(data))

export const dataModel: DataModelReducer = (initialData, endpoint) => ({
  coveredLoading: false,
  //   Copy data
  data: generic(copyData(initialData)),
  error: null,
  loading: false,
  refetchArgs: generic(null),
  success: false,
  //   Actions
  fetch: thunk(async (actions, payload) => {
    try {
      actions.fetchStart(false)
      const res = await endpoint(payload)
      actions.fetchSuccess(res)
    } catch (error) {
      actions.fetchError(error.message)
    } finally {
      actions.fetchEnd()
    }
  }),
  refetch: thunk(() => {}),
  coveredFetch: thunk(() => {}),
  onFetch: thunkOn(
    (actions) => [actions.fetch, actions.refetch],
    async (actions) => {
      actions.fetchStart(false)
    }
  ),
  onCoveredFetch: thunkOn(
    (actions) => actions.fetch,
    async (actions, target) => {
      actions.fetchStart(true)
      actions.fetch(target.payload as any)
    }
  ),
  onRefetch: thunkOn(
    (actions) => actions.refetch,
    async (actions, _target, helpers) => {
      const { refetchArgs, success, error } = helpers.getState()
      if (success || error) {
        actions.fetch(refetchArgs as any)
      }
    }
  ),
  fetchStart: action((state, covered) => {
    if (covered) {
      state.coveredLoading = true
    } else {
      state.loading = true
    }
  }),
  fetchError: action((state, error) => {
    state.error = error
  }),
  fetchSuccess: action((state, payload) => {
    state.data = payload
    state.success = true
    state.error = null
  }),
  fetchEndSuccess: action((state) => {
    state.success = true
    state.error = null
  }),
  fetchEnd: action((state) => {
    state.loading = false
    state.coveredLoading = false
  }),
  resetStore: action((state) => {
    state.data = copyData(initialData)
    state.coveredLoading = false
    state.error = null
    state.loading = false
    state.refetchArgs = null
    state.success = false
    state.refetchArgs = null
  }),
  storeFetchArgs: action((state, payload) => {
    state.refetchArgs = payload
  }),
})
