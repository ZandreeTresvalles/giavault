import type { NextApiRequest, NextApiResponse } from "next";
import { isEmpty } from "@helper/objects";
import { getUsers, LoginApi, RegisterApi } from "@helper/user";
import connectMongo from "@libs/database";
import { ERROR_TYPES } from "@typedefs/errors";
import { Query } from "@typedefs/query";
import { User } from "@typedefs/user";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  switch (req.method) {
    case "POST":
      return res.status(405).json({ error: ERROR_TYPES.METHOD_NOT_ALLOWED });
    case "GET":
      const query: unknown = req.query;
      const data = await getUsers(query as Query);
      return res.status(200).json({ data });
    case "PATCH":
      return res.status(405).json({ error: ERROR_TYPES.METHOD_NOT_ALLOWED });
    default:
      return res.status(405).json({ error: ERROR_TYPES.METHOD_NOT_ALLOWED });
  }
}

export default connectMongo(handler);
