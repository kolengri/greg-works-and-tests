import { DEFAULT_LIST_LIMIT } from "../config/env"
import { Resource, Pagination, ResourceToModel } from "../types"

type Result<T> = ResourceToModel<T>[]
type Response<T> = {
  result: Result<T>
} & Pagination

type RequestParams = {
  search?: string
} & Partial<Pagination>

export const createApiListHandler = <T extends Resource<any>>(
  data: T[],
  params: RequestParams,
  searchFn: (item: T) => (string | number)[]
): Response<T> => {
  const { search } = params
  const skip = Number(params.skip || 0)
  const limit = Number(params.limit || DEFAULT_LIST_LIMIT)

  const withSearch = (data: T[]) => {
    if (search) {
      return data.filter((item) =>
        searchFn(item).some((itemValue) =>
          itemValue.toString().toLowerCase().includes(search.toLowerCase())
        )
      )
    }
    return data
  }
  const result: Result<T> = withSearch(data)
    .slice(Number(skip), Number(skip) + Number(limit))
    .map((item) => ({
      id: item.pk,
      ...item.fields,
    }))

  return {
    limit,
    result,
    skip,
    total: data.length,
  }
}
