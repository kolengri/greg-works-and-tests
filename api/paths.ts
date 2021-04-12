import { makeRoutePath } from "make-route-path"
import { API_ENDPOINT as BASE } from "../config/env"

export const characters = makeRoutePath(`${BASE}/characters`)
