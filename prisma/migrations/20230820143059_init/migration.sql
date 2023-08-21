/*
  Warnings:

  - You are about to drop the column `designId` on the `Diary` table. All the data in the column will be lost.
  - Added the required column `diaryDesignId` to the `Diary` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Diary" DROP CONSTRAINT "Diary_designId_fkey";

-- AlterTable
ALTER TABLE "Diary" DROP COLUMN "designId",
ADD COLUMN     "diaryDesignId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Diary" ADD CONSTRAINT "Diary_diaryDesignId_fkey" FOREIGN KEY ("diaryDesignId") REFERENCES "DiaryDesign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
