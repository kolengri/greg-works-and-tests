export type Resource<Fields extends Record<string, any>> = {
  fields: Fields
  model: string
  pk: number
}
