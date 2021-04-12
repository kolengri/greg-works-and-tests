import { charactersModel } from "./charactersModel"

export type StoreModel = typeof storeModel

const storeModel = {
  characters: charactersModel,
}

export default storeModel
