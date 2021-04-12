import { NextApiRequest, NextApiResponse } from "next"
import data from "../../../__mock__/characters.json"
import { createApiListHandler } from "../../../utils/createApiListHandler"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = createApiListHandler(data, req.query, (item) => [item.fields.name])
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
