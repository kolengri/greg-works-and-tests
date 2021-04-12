import { apiRequest } from "./apiRequest"
import { Character } from "../models"
import { ApiListResponse, ApiPaginationRequest } from "./models"
import * as paths from "./paths"

export type Response = ApiListResponse<Character[]>
export type Params = ApiPaginationRequest

export const fetchCharacters = async (params: Params): Promise<Response> => {
  return await (await apiRequest.get<Response>(paths.characters(), { params })).data
}
