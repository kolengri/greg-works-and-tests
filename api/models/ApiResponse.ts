import { Pagination } from "../../types"

export type ApiResponse<T> = {
  result: T
  pagination: T extends [] ? Pagination : never
}
