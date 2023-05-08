import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@libs/database";
import { ERROR_TYPES } from "@typedefs/errors";
import { withAuth } from "@libs/guard";
import { Query } from "@typedefs/query";
import { getNotifications, updateNotifications } from "@libs/notification";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  switch (req.method) {
    case "POST":
      const { body } = req;
      const response = await updateNotifications(body);
      return res.status(200).json({ success: true, message: response });
    case "GET":
      const query: unknown = req.query;
      const data = await getNotifications(query as Query);
      return res.status(200).json({ data });
    case "PATCH":
      return res.status(405).json({ error: ERROR_TYPES.METHOD_NOT_ALLOWED });
    default:
      return res.status(405).json({ error: ERROR_TYPES.METHOD_NOT_ALLOWED });
  }
}

export default withAuth(connectMongo(handler));
