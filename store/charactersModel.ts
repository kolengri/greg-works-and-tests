import { dataModel } from "./models/dataModel"
import {
  fetchCharacters,
  Params as CharactersStoreFetchPayload,
  Response,
} from "../api/fetchCharacters"
import { INITIAL_WITH_PAGINATION } from "./models/defaults"

export type CharactersStoreData = Response
export type { CharactersStoreFetchPayload }

export const charactersModel = {
  ...dataModel<CharactersStoreData, CharactersStoreFetchPayload>(
    {
      ...INITIAL_WITH_PAGINATION,
    },
    fetchCharacters
  ),
}
