import { dataModel } from "./models/dataModel"
import { Character } from "../models"
import { fetchCharacters, Params as CharactersStoreFetchPayload } from "../api/fetchCharacters"

export type CharactersStoreData = Character[]
export type CharactersStoreModel = typeof charactersModel
export type { CharactersStoreFetchPayload }

export const charactersModel = {
  ...dataModel<CharactersStoreData, CharactersStoreFetchPayload>([], fetchCharacters),
}
