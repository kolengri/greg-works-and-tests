import { Resource } from "./Resource"

export type ResourceToModel<T extends Resource<any>> = { id: T["pk"] } & T["fields"]
