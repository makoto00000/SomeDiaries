/*
  Warnings:

  - The primary key for the `DiaryUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `DiaryUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DiaryUser" DROP CONSTRAINT "DiaryUser_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "DiaryUser_pkey" PRIMARY KEY ("diaryId", "userId");
