/*
  Warnings:

  - A unique constraint covering the columns `[channel_url]` on the table `Channel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Channel_channel_url_key" ON "Channel"("channel_url");
