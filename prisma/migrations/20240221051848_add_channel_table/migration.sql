-- AlterTable
ALTER TABLE "User" ALTER COLUMN "is_deleted" SET DEFAULT false;

-- CreateTable
CREATE TABLE "Channel" (
    "id" SERIAL NOT NULL,
    "channel_url" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "chatmate_id" INTEGER NOT NULL,
    "total_messages" INTEGER NOT NULL DEFAULT 0,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Channel_pkey" PRIMARY KEY ("id")
);
