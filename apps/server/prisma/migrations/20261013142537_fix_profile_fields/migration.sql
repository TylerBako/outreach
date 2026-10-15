/*
  Warnings:

  - The `communityKeys` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[username]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "communityKeys",
ADD COLUMN     "communityKeys" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Profile_username_key" ON "Profile"("username");
