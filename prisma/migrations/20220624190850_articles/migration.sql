-- CreateTable
CREATE TABLE "Lauche" (
    "id" TEXT NOT NULL,
    "laucheId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,

    CONSTRAINT "Lauche_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "newsSite" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "publishedAt" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_id_key" ON "products"("id");

-- AddForeignKey
ALTER TABLE "Lauche" ADD CONSTRAINT "Lauche_laucheId_fkey" FOREIGN KEY ("laucheId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
