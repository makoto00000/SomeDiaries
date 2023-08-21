/*
  Warnings:

  - You are about to drop the `_DiaryToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DiaryToUser" DROP CONSTRAINT "_DiaryToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_DiaryToUser" DROP CONSTRAINT "_DiaryToUser_B_fkey";

-- DropTable
DROP TABLE "_DiaryToUser";
