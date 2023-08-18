-- AlterTable
ALTER TABLE "Diary" ALTER COLUMN "isExchange" SET DEFAULT true;

-- CreateTable
CREATE TABLE "DiaryDesign" (
    "id" SERIAL NOT NULL,
    "Num" INTEGER NOT NULL,
    "source" TEXT NOT NULL,

    CONSTRAINT "DiaryDesign_pkey" PRIMARY KEY ("id")
);
