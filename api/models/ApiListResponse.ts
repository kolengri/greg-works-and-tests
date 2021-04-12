import { ApiResponse } from "./ApiResponse"

type PaginationResponse = {
  limit: number
  skip: number
}

export type ApiListResponse<T extends any[]> = {} & ApiResponse<T> & PaginationResponse
