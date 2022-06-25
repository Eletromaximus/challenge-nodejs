/*
  Warnings:

  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Lauche" DROP CONSTRAINT "Lauche_laucheId_fkey";

-- DropTable
DROP TABLE "products";

-- CreateTable
CREATE TABLE "articles" (
    "id" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "newsSite" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "publishedAt" TEXT NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "articles_id_key" ON "articles"("id");

-- AddForeignKey
ALTER TABLE "Lauche" ADD CONSTRAINT "Lauche_laucheId_fkey" FOREIGN KEY ("laucheId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
