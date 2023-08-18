/*
  Warnings:

  - You are about to drop the column `design` on the `Diary` table. All the data in the column will be lost.
  - You are about to drop the column `Num` on the `DiaryDesign` table. All the data in the column will be lost.
  - You are about to drop the `DiaryAuthor` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[designId]` on the table `Diary` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `designId` to the `Diary` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DiaryAuthor" DROP CONSTRAINT "DiaryAuthor_diaryId_fkey";

-- DropForeignKey
ALTER TABLE "DiaryAuthor" DROP CONSTRAINT "DiaryAuthor_userId_fkey";

-- AlterTable
ALTER TABLE "Diary" DROP COLUMN "design",
ADD COLUMN     "designId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "DiaryDesign" DROP COLUMN "Num";

-- DropTable
DROP TABLE "DiaryAuthor";

-- CreateTable
CREATE TABLE "DiaryUser" (
    "id" SERIAL NOT NULL,
    "diaryId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCreate" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "DiaryUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiaryUser_diaryId_key" ON "DiaryUser"("diaryId");

-- CreateIndex
CREATE UNIQUE INDEX "DiaryUser_userId_key" ON "DiaryUser"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Diary_designId_key" ON "Diary"("designId");

-- AddForeignKey
ALTER TABLE "Diary" ADD CONSTRAINT "Diary_designId_fkey" FOREIGN KEY ("designId") REFERENCES "DiaryDesign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiaryUser" ADD CONSTRAINT "DiaryUser_diaryId_fkey" FOREIGN KEY ("diaryId") REFERENCES "Diary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiaryUser" ADD CONSTRAINT "DiaryUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
