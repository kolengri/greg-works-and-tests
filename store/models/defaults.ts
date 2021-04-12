import { ApiListResponse } from "../../requests/models"
import { DEFAULT_LIST_LIMIT } from "../../config/env"

export const INITIAL_WITH_PAGINATION: ApiListResponse<any[]> = {
  limit: DEFAULT_LIST_LIMIT,
  skip: 0,
  result: [],
  total: 0,
}
