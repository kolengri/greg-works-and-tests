import axios from "axios"

import { API_CALL_TIMEOUT, API_ENDPOINT } from "../config/env"

export const apiRequest = axios.create({
  baseURL: API_ENDPOINT,
  timeout: API_CALL_TIMEOUT,
})
