import { Action, action, Generic, generic, Thunk, ThunkOn, thunk, thunkOn } from "easy-peasy"

type PossibleTypes = string | number | Record<string | number, any> | any[]

export type DataStoreModel<DataType extends PossibleTypes, FetchPayload = null> = {
  coveredLoading: boolean
  data: Generic<DataType>
  error: null | string
  loading: boolean
  refetchArgs: Generic<null | FetchPayload>
  success: boolean
  //   Thunk Actions
  _fetch: Thunk<DataStoreModel<DataType, FetchPayload>, FetchPayload>
  fetchContent: Thunk<DataStoreModel<DataType, FetchPayload>, FetchPayload>
  coveredFetch: Thunk<DataStoreModel<DataType, FetchPayload>>
  refetch: Thunk<DataStoreModel<DataType, FetchPayload>>
  resetStore: Thunk<DataStoreModel<DataType>>

  // Listeners
  onFetch: ThunkOn<DataStoreModel<DataType, FetchPayload>, FetchPayload>
  onFetchContent: ThunkOn<DataStoreModel<DataType, FetchPayload>, FetchPayload>
  onReFetchContent: ThunkOn<DataStoreModel<DataType, FetchPayload>, FetchPayload>
  onCoveredFetch: ThunkOn<DataStoreModel<DataType, FetchPayload>, FetchPayload>
  onRefetch: ThunkOn<DataStoreModel<DataType>>
  onResetStore: ThunkOn<DataStoreModel<DataType>>
  // Actions
  _fetchStart: Action<DataStoreModel<DataType, FetchPayload>, boolean>
  _fetchError: Action<DataStoreModel<DataType, FetchPayload>, string>
  _fetchSuccess: Action<DataStoreModel<DataType, FetchPayload>, DataType>
  _fetchEndSuccess: Action<DataStoreModel<DataType, FetchPayload>>
  _fetchEnd: Action<DataStoreModel<DataType, FetchPayload>>
  _collectFetchArgs: Action<DataStoreModel<DataType, FetchPayload>, FetchPayload>
  _resetStore: Action<DataStoreModel<DataType>>
}

export type DataModelReducer = {
  <DataType extends PossibleTypes, FetchPayload = null>(
    initialData: DataType,
    endpoint: (payload: FetchPayload) => Promise<DataType>
  ): DataStoreModel<DataType, FetchPayload>
}

const copyData = (data: any) => JSON.parse(JSON.stringify(data))

export const dataModel: DataModelReducer = (initialData, endpoint) => ({
  data: generic(copyData(initialData)),
  error: null,
  loading: false,
  coveredLoading: false,
  refetchArgs: generic(null),
  success: false,
  /**
   * Thunks
   */
  // Main fetch
  _fetch: thunk(async (actions, payload) => {
    try {
      const res = await endpoint(payload)
      actions._fetchSuccess(res)
    } catch (error) {
      actions._fetchError(error.message)
    } finally {
      actions._fetchEnd()
    }
  }),
  // Fetch aliases
  coveredFetch: thunk(() => {}),
  fetchContent: thunk(() => {}),
  refetch: thunk(() => {}),
  //
  resetStore: thunk(() => {}),
  /**
   * Listeners
   */
  onFetch: thunkOn(
    (actions) => [actions._fetch],
    async (actions, target) => {
      actions._collectFetchArgs(target.payload as any)
    }
  ),
  onReFetchContent: thunkOn(
    (actions) => actions.refetch,
    async (actions, _, helpers) => {
      actions._fetchStart(false)
      const { refetchArgs } = helpers.getState()
      actions._fetch(refetchArgs as any)
    }
  ),
  onFetchContent: thunkOn(
    (actions) => actions.fetchContent,
    async (actions, target) => {
      actions._fetchStart(false)
      actions._fetch(target.payload as any)
    }
  ),
  onCoveredFetch: thunkOn(
    (actions) => actions.coveredFetch,
    async (actions, target) => {
      actions._fetchStart(true)
      actions._fetch(target.payload as any)
    }
  ),
  onRefetch: thunkOn(
    (actions) => actions.refetch,
    async (actions, _target, helpers) => {
      const { refetchArgs, success, error } = helpers.getState()
      if (success || error) {
        actions._fetch(refetchArgs as any)
      }
    }
  ),
  onResetStore: thunkOn(
    (actions) => actions.resetStore,
    async (actions) => {
      actions._resetStore()
    }
  ),
  /**
   * Private actions
   */
  _fetchStart: action((state, covered) => {
    if (covered) {
      state.coveredLoading = true
    } else {
      state.loading = true
    }
  }),
  _fetchError: action((state, error) => {
    state.error = error
  }),
  _fetchSuccess: action((state, payload) => {
    state.data = payload
    state.success = true
    state.error = null
  }),
  _fetchEndSuccess: action((state) => {
    state.success = true
    state.error = null
  }),
  _fetchEnd: action((state) => {
    state.loading = false
    state.coveredLoading = false
  }),
  _resetStore: action((state) => {
    state.data = copyData(initialData)
    state.coveredLoading = false
    state.error = null
    state.loading = false
    state.refetchArgs = null
    state.success = false
    state.refetchArgs = null
  }),
  _collectFetchArgs: action((state, payload) => {
    state.refetchArgs = payload
  }),
})
