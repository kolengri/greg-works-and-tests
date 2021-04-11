export type ApiResponse<T> = {
  message: "ok"
  results: T extends [] ? T : never
  result: T extends Object | string | number ? T : never
}
