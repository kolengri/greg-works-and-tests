import { NextApiRequest, NextApiResponse } from "next"
import { createApiListHandler } from "../../../utils/createApiListHandler"

const mock = import("../../../__mock__/characters.json")
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    mock.then(({ default: data }) => {
      const response = createApiListHandler(data, req.query, (item) => [item.fields.name])
      res.status(200).json(response)
    })
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
