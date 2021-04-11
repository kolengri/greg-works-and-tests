import { makeRoutePath } from "make-route-path"
import { API_ENDPOINT as BASE } from "../config/env"

export const peoples = makeRoutePath(`${BASE}/people`)
