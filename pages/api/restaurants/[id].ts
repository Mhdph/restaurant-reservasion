import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return getRestaurant(req, res);
    case "PUT":
      return updateRestaurant(req, res);
    case "DELETE":
      return deleteRestaurant(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function getRestaurant(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const restaurant = await db.restaurant.findUnique({
      where: { id: Number(id) },
      include: { items: true, cuisine: true, location: true },
    });
    res.json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to retrieve restaurant" });
  }
}

async function updateRestaurant(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    const restaurant = await db.restaurant.update({
      where: { id: Number(id) },
      data: req.body,
    });
    return res.json(restaurant);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
}

async function deleteRestaurant(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    await db.restaurant.delete({
      where: { id: Number(id) },
    });
    return res.status(204).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
}
