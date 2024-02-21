-- AlterTable
ALTER TABLE "Channel" ALTER COLUMN "total_messages" DROP NOT NULL,
ALTER COLUMN "is_deleted" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "is_deleted" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL;
