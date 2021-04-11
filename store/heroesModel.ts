import { dataModel } from "./models/dataModel"
import { People } from "../models"
import { fetchPeoples, Params as HeroesStoreFetchPayload } from "../api/fetchPeoples"

export type HeroesStoreData = People[]
export type HeroesStoreModel = typeof heroesModel
export type { HeroesStoreFetchPayload }

export const heroesModel = {
  ...dataModel<HeroesStoreData, HeroesStoreFetchPayload>([], fetchPeoples),
}
