import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return getItems(req, res);
    case "POST":
      return createItem(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function getItems(req: NextApiRequest, res: NextApiResponse) {
  try {
    const items = await db.item.findMany();
    return res.status(200).json(items);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
}

async function createItem(req: NextApiRequest, res: NextApiResponse) {
  try {
    const item = await db.item.create({ data: req.body });
    return res.json(item);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
}
