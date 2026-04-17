-- CreateTable
CREATE TABLE "NFT" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "mintedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerAddress" TEXT
);
