import { apiRequest } from "./apiRequest"
import { Character } from "../models"
import { ApiListResponse } from "./models"
import { PaginationRequest } from "../types"
import * as paths from "./paths"

export type Response = ApiListResponse<Character[]>
export type Params = PaginationRequest

export const fetchCharacters = async (params: Params): Promise<Character[]> => {
  return await (await apiRequest.get<Response>(paths.characters(), { params })).data.result
}
