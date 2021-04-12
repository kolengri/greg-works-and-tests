import { apiRequest } from "./apiRequest"
import { People } from "../models"
import { ApiListResponse } from "./models"
import * as paths from "./paths"

export type Response = ApiListResponse<People[]>
export type Params = {
  name?: string
  page?: number
  limit?: number
}

export const fetchPeoples = async (params: Params): Promise<People[]> => {
  return await (await apiRequest.get<Response>(paths.peoples(), { params })).data.results
}
