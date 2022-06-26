/*
  Warnings:

  - The primary key for the `articles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lauche` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `id` on the `articles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Lauche" DROP CONSTRAINT "Lauche_laucheId_fkey";

-- AlterTable
ALTER TABLE "articles" DROP CONSTRAINT "articles_pkey",
ADD COLUMN     "eventsId" TEXT[],
ADD COLUMN     "eventsProvider" TEXT[],
ADD COLUMN     "launchesId" TEXT[],
ADD COLUMN     "launchesProvider" TEXT[],
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "articles_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "Lauche";

-- CreateIndex
CREATE UNIQUE INDEX "articles_id_key" ON "articles"("id");
