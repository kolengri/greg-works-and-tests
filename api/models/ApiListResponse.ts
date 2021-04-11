import { ApiResponse } from "./ApiResponse"
export type ApiListResponse<T extends any[]> = {} & ApiResponse<T>
