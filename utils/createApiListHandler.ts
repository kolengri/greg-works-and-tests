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
  const { skip = 0, limit = DEFAULT_LIST_LIMIT, search } = params

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
    .slice(skip, skip + limit)
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
