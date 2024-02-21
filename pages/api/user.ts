import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

type UserModel = Omit<User, "id" | "created_at">;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    try {
      const user_prisma = prisma.user;
      const { user_id } = req.body as UserModel;

      const upsertedUser = await user_prisma.upsert({
        where: { user_id },
        update: { ...req.body },
        create: { ...req.body },
      });

      res.status(201).json(upsertedUser);
    } catch (error) {
      console.error("error: ", error);
    }
  } else {
    // GET
    res.status(200).json({
      id: 1,
      user_id: "test",
      is_deleted: false,
      nick_name: "test",
      profile_url: "",
      created_at: null,
    });
  }
}
