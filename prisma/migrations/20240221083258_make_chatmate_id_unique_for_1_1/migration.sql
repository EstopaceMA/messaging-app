/*
  Warnings:

  - A unique constraint covering the columns `[chatmate_id]` on the table `Channel` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Channel_channel_url_key";

-- CreateIndex
CREATE UNIQUE INDEX "Channel_chatmate_id_key" ON "Channel"("chatmate_id");
