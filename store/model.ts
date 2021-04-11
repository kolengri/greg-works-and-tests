import { heroesModel } from "./heroesModel"

export type StoreModel = typeof storeModel

const storeModel = {
  heroes: heroesModel,
}

export default storeModel
