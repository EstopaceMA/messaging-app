import type { NextApiRequest, NextApiResponse } from "next";
import { Channel } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

type ChannelModel = Omit<
  Channel,
  "id" | "created_at" | "is_deleted" | "total_messages"
>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    try {
      const channel_prisma = prisma.channel;
      const { chatmate_id } = req.body as ChannelModel;

      const upsertedChannel = await channel_prisma.upsert({
        where: { chatmate_id },
        update: { ...req.body },
        create: { ...req.body },
      });

      res.status(201).json(upsertedChannel);
    } catch (error) {
      console.error("error: ", error);
    }
  } else {
    // GET
    res.status(200).json({
      channel: "test_channel",
    });
  }
}
