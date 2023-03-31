import type { NextApiRequest, NextApiResponse } from "next";
import { isEmpty } from "../../../helper/objects";
import { FindApiForReset, ResetApi } from "../../../helper/reset";
import { LoginApi, RegisterApi } from "../../../helper/user";
import connectMongo from "../../../lib/database";
import { ERROR_TYPES } from "../../../typedefs/errors";
import { User } from "../../../typedefs/user";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  switch (req.method) {
    case "POST":
      const body = req.body;
      const reset = await ResetApi(body);
      if (reset) return res.status(200).json({ success: true });
      return res.status(404).json({ error: ERROR_TYPES.WRONG_INPUT });
    case "GET":
      const creds: Partial<User> = req.query;
      const data = await FindApiForReset(creds);
      if (data) return res.status(200).json({ data });
      return res.status(404).json({ error: ERROR_TYPES.USER_NOT_FOUND });
    case "PATCH":
      return res.status(405).json({ error: ERROR_TYPES.METHOD_NOT_ALLOWED });
    default:
      return res.status(405).json({ error: ERROR_TYPES.METHOD_NOT_ALLOWED });
  }
}

export default connectMongo(handler);
