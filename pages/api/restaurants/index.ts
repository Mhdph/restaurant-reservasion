import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return getRestaurants(req, res);
    case "POST":
      return createRestaurant(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function getRestaurants(req: NextApiRequest, res: NextApiResponse) {
  try {
    const restaurants = await db.restaurant.findMany();
    return res.json(restaurants);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
}

async function createRestaurant(req: NextApiRequest, res: NextApiResponse) {
  try {
    const restaurant = await db.restaurant.create({ data: req.body });
    return res.json(restaurant);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
}
