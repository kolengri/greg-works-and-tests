import { ResourceToModel } from "../types"
import json from "../__mock__/characters.json"

export type Character = ResourceToModel<typeof json[0]>
