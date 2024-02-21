-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nick_name" TEXT NOT NULL,
    "profile_url" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
