import { Resource } from "./Resource"

export type ResourceToModel<T> = { id: Resource<T>["pk"] } & Resource<T>["fields"]
