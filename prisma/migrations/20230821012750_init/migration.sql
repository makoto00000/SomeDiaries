-- CreateTable
CREATE TABLE "_DiaryToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DiaryToUser_AB_unique" ON "_DiaryToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DiaryToUser_B_index" ON "_DiaryToUser"("B");

-- AddForeignKey
ALTER TABLE "_DiaryToUser" ADD CONSTRAINT "_DiaryToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Diary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiaryToUser" ADD CONSTRAINT "_DiaryToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
